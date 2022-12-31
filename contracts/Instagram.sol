// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Instagram {
    struct Image {
        uint256 id;
        string url;
        string caption;
        uint256 totalTipAmount;
        address payable author;
        address[] tipperAddress;
    }

    uint256 public imageCount;
    mapping(uint256 => Image) public images;

    event ImageCreated(uint256 id, string url, string caption, address author);
    event ImageTipped(
        uint256 id,
        string url,
        string caption,
        uint256 currentTip,
        uint256 totalTipped,
        address author
    );

    function uploadImage(string memory _url, string memory _caption) public {
        imageCount++;

        images[imageCount] = Image(
            imageCount,
            _url,
            _caption,
            0,
            payable(msg.sender),
            new address[](0)
        );

        emit ImageCreated(imageCount, _url, _caption, payable(msg.sender));
    }

    function tipImage(uint256 _id) public payable {
        Image memory _image = images[_id];

        require(_id > 0 && _id <= imageCount, "Invalid Image ID");
        require(msg.value > 0, "Tip Amount must be greater than 0");
        require(
            msg.sender != _image.author,
            "Owner cannot tip their own images"
        );

        payable(_image.author).transfer(msg.value);
        _image.totalTipAmount += msg.value;
        images[_id] = _image;

        emit ImageTipped(
            _id,
            _image.url,
            _image.caption,
            msg.value,
            _image.totalTipAmount,
            _image.author
        );
    }

    function getImages() public view returns (Image[] memory) {
        Image[] memory _image = new Image[](imageCount);
        for (uint256 i = 0; i < imageCount; i++) {
            _image[i] = images[i + 1];
        }
        return _image;
    }
}
