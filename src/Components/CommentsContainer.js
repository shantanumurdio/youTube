import React from "react";

const commentsData = [
  {
    name: "Aditya Vairagade",
    text: "Lorem Ipsum domksdkaf asdfjsjdfjkl",
    replies: [],
  },
  {
    name: "Aditya Vairagade",
    text: "Lorem Ipsum domksdkaf asdfjsjdfjkl",
    replies: [
      {
        name: "Aditya Vairagade",
        text: "Lorem Ipsum domksdkaf asdfjsjdfjkl",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 shadow-lg p-2 rounded">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
    
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
