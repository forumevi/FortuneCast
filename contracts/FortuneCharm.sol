// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FortuneCharm is ERC721, Ownable {
    uint256 public nextId;
    mapping(uint256 => string) public metadata;

    constructor() ERC721("FortuneCharm", "FCHARM") {}

    function mint(address to, string memory text) external onlyOwner returns (uint256) {
        uint256 id = nextId++;
        _mint(to, id);
        metadata[id] = text;
        return id;
    }
}
