import { useState, useEffect, createContext, useContext } from "react";
import { contractAddress, contractABI } from "../utils/constant";
import { ethers } from "ethers";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState();

  const ethereumClient = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setContract(contract);
      }
    } catch (error) {
      console.log("Create Post Failed", error);
    }
  };

  useEffect(() => {
    ethereumClient();
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have MetaMask!");
        return;
      } else {

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          const account = accounts[0];
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Make sure you have Metamask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object found!");
    }
  };

  const uploadPost = async (imgUrl, caption) => {
    try {
      const upload = await contract.uploadImage(imgUrl, caption);
      await upload.wait();
    } catch (error) {
      console.log("Upload Posts...", error);
    }
  };

  const tipOwner = async (pId, amount) => {
    try {
      const tip = await contract.tipImage(pId, {
        value: ethers.utils.parseEther(amount),
        gasLimit: 5000000,
      });
      await tip.wait()
      toast.success("Tip Successfull")
    } catch (error) {
      console.log("Tip Owner---", error);
      toast.error("An Error occured")
    }
  };

  const getAllPosts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const posts = await contract.getImages();

      const parsedPosts = posts.map((post, i) => ({
        pId: i,
        author: post.author,
        caption: post.caption,
        image: post.url,
        totalTip: ethers.utils.formatEther(post.totalTipAmount.toString()),
      }));

      return parsedPosts;
    } catch (error) {
      console.log("Get All Posts...", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentAccount,
        connectWallet,
        uploadPost,
        getAllPosts,
        tipOwner,
        contract
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
