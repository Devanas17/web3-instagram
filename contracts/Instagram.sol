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

    event ImageCreated(
        uint256 id,
        string url,
        string caption,
        address payable author
    );

    event ImageTipped(
        uint256 id,
        string url,
        string caption,
        uint256 currentTip,
        uint256 totalTipped,
        address payable author
    );

    function uploadImage(string memory _imgUrl, string memory _caption) public {
        imageCount++;

        images[imageCount] = Image(
            imageCount,
            _imgUrl,
            _caption,
            0,
            payable(msg.sender),
            new address[](0)
        );

        emit ImageCreated(imageCount, _imgUrl, _caption, payable(msg.sender));
    }

    function tipImageOwner(uint256 _id) public payable {
        Image memory _image = images[_id];
        require(_id >= 0 && _id >= imageCount, "Invalidimage ID");
        require(msg.value > 0, "Tip must be greater than 0");
        require(
            msg.sender != _image.author,
            "Owner cannot tip their own image"
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
}
