const hre = require("hardhat");

async function main() {
  const Instagram = await hre.ethers.getContractFactory("Instagram");
  const instagram = await Instagram.deploy();

  await instagram.deployed();

  console.log(`deployed to ${instagram.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
