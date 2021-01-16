// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  const box = await upgrades.upgradeProxy("0x8A791620dd6260079BF849Dc5567aDC3F2FdC318", BoxV2);
  console.log("Box upgraded");
}

main();