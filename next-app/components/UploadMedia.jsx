import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../context/context";
import { Uploader } from "uploader";
const notify = () => toast("Please fill all the details!");

const uploader = Uploader({
  apiKey: "free",
});

const UploadMedia = () => {
  const { uploadPost } = useAppContext();

  const [imgUrl, setImgUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleUploadProductImage = async () => {
    uploader
      .open({ multi: false })
      .then((files) => {
        if (files.length === 0) {
          alert("No files selected.");
        } else {
          setImgUrl(files[0].fileUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgUrl || !caption) {
      toast.error("Please fill all the details");
      // return
    } else {
      toast.promise(uploadPost(imgUrl, caption), {
        loading: "Listing Item... This can take a few seconds. ⏳",
        success: "Item listed! 🎉",
        error: "Error listing item. 😢",
      });
    }
  };
  return (
    <div className="sell-container space-y-3  p-7 m-4 border-2 border-gray-300 rounded-md w-full bg-white">
      <div className="sell-input-container flex flex-col px-2">
        <span className="sell-input-title text-lg font-semibold px-1">
          Image
        </span>
        <button
          className="sell-input-button text-base text-white bg-black font-semibold border-0 px-3 py-1 rounded-md"
          onClick={handleUploadProductImage}
        >
          Upload Product image
        </button>
      </div>
      <div className="sell-input-container flex flex-col px-2">
        <span className="sell-input-title text-lg font-semibold px-1">
          Caption
        </span>
        <textarea
          className="sell-input-textbox text-sm font-normal border border-gray-500 p-2 rounded-sm"
          type="text"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="sell-input-button text-base text-white bg-black font-semibold border-0 ml-2 px-3 py-1 rounded-md"
      >
        List Item
      </button>
    </div>
  );
};

export default UploadMedia;
