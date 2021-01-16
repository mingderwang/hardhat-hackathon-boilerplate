// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Token");
  console.log("Deploying Token...");
  const box = await upgrades.deployProxy(Token, [42], { initializer: 'store' });
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();
