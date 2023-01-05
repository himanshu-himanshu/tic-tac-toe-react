import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Homepage = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [activePlayer, setActivePlayer] = useState("cross");

  const handleRowClick = (index1, index2) => {
    setActivePlayer(activePlayer == "cross" ? "circle" : "cross");
    if (board[index1][index2] != "") {
      return;
    }
    board[index1][index2] = activePlayer;
    setBoard((board) => [...board]);
    console.log(board);
  };

  return (
    <section className="bg-primary">
      <div className="container max-w-5xl mx-auto flex flex-col space-y-16 h-screen w-full items-center justify-center ">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 w-[50%] h-[60%] bg-lightGreen/90">
          <div className="group block" onClick={() => handleRowClick(0, 0)}>
            {board[0][0] == "" ? (
              <></>
            ) : board[0][0] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[0][0] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(0, 1)}>
            {board[0][1] == "" ? (
              <></>
            ) : board[0][1] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[0][1] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(0, 2)}>
            {board[0][2] == "" ? (
              <></>
            ) : board[0][2] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[0][2] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(1, 0)}>
            {board[1][0] == "" ? (
              <></>
            ) : board[1][0] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[1][0] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(1, 1)}>
            {board[1][1] == "" ? (
              <></>
            ) : board[1][1] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[1][1] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(1, 2)}>
            {board[1][2] == "" ? (
              <></>
            ) : board[1][2] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[1][2] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(2, 0)}>
            {board[2][0] == "" ? (
              <></>
            ) : board[2][0] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[2][0] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(2, 1)}>
            {board[2][1] == "" ? (
              <></>
            ) : board[2][1] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[2][1] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(2, 2)}>
            {board[2][2] == "" ? (
              <></>
            ) : board[2][2] == "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[2][2] == "" ? (
              activePlayer == "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="font-light tracking-wide text-gray-500 flex flex-row items-center justify-center space-x-4">
          <span className="text-3xl">Next Player:</span>
          {activePlayer === "cross" ? (
            <RxCross1 className="h-10 w-10 text-gray-500" />
          ) : (
            <BsCircle className="h-10 w-10 text-gray-500" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
