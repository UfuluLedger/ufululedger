// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Decentralized Content Ownership Contract
/// @author Born To Code Foundation
/// @ email born2code265@gmail.com
/// @notice This contract manages content registration, ownership, and transfer on a decentralized platform.
contract ContentOwnership {
    /// @dev Struct to store content details
    struct Content {
        string title;
        string description;
        string contentHash;
        address owner;
        uint256 timestamp;
    }

    /// @dev Mapping to store content by unique hash
    mapping(string => Content) private contents;
    /// @dev Mapping to track content hashes owned by each user
    mapping(address => string[]) private ownerContents;

    /// @dev Event triggered when new content is registered
    event ContentRegistered(
        string contentHash,
        address owner,
        uint256 timestamp
    );
    /// @dev Event triggered when ownership is transferred
    event OwnershipTransferred(
        string contentHash,
        address oldOwner,
        address newOwner
    );

    /// @notice Register new content
    /// @param _title Title of the content
    /// @param _description Description of the content
    /// @param _contentHash Unique hash representing the content
    function registerContent(
        string memory _title,
        string memory _description,
        string memory _contentHash
    ) public {
        require(bytes(_contentHash).length > 0, "Content hash cannot be empty");
        require(
            contents[_contentHash].owner == address(0),
            "Content already registered"
        );

        contents[_contentHash] = Content({
            title: _title,
            description: _description,
            contentHash: _contentHash,
            owner: msg.sender,
            timestamp: block.timestamp
        });

        ownerContents[msg.sender].push(_contentHash);
        emit ContentRegistered(_contentHash, msg.sender, block.timestamp);
    }

    /// @notice Transfer ownership of content
    /// @param _contentHash Unique hash representing the content
    /// @param _newOwner Address of the new owner
    function transferOwnership(
        string memory _contentHash,
        address _newOwner
    ) public {
        require(
            contents[_contentHash].owner == msg.sender,
            "Only the owner can transfer ownership"
        );
        require(_newOwner != address(0), "Invalid new owner address");

        address oldOwner = contents[_contentHash].owner;
        contents[_contentHash].owner = _newOwner;

        emit OwnershipTransferred(_contentHash, oldOwner, _newOwner);
    }

    /// @notice Retrieve content details
    /// @param _contentHash Unique hash representing the content
    /// @return Content details
    function getContent(
        string memory _contentHash
    ) public view returns (Content memory) {
        require(
            contents[_contentHash].owner != address(0),
            "Content not found"
        );
        return contents[_contentHash];
    }

    /// @notice Get all content hashes owned by a user
    /// @param _owner Address of the owner
    /// @return List of content hashes
    function getUserContents(
        address _owner
    ) public view returns (string[] memory) {
        return ownerContents[_owner];
    }
}
