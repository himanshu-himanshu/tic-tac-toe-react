import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import Swal from "sweetalert2";

const Homepage = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [activePlayer, setActivePlayer] = useState("cross");

  var isGameOver = false;

  const handleRowClick = (index1, index2) => {
    if (isGameOver) {
      return;
    }
    if (board[index1][index2] !== "") {
      return;
    }
    setActivePlayer(activePlayer === "cross" ? "circle" : "cross");

    board[index1][index2] = activePlayer;
    setBoard((board) => [...board]);
    checkWinner();
    console.log(board);
  };

  const checkWinner = () => {
    for (let i = 0; i < board.length; i++) {
      let value = "";
      for (let j = 0; j < board[i].length; j++) {
        value += board[i][j];
      }
      if (value === "crosscrosscross") {
        displayWinner("Cross");
        return;
      }
      if (value === "circlecirclecircle") {
        displayWinner("Circle");
        return;
      }
    }

    for (let i = 0; i < board.length; i++) {
      let value = "";
      for (let j = 0; j < board[i].length; j++) {
        value += board[j][i];
      }
      if (value === "crosscrosscross") {
        displayWinner("Cross");
        return;
      }
      if (value === "circlecirclecircle") {
        displayWinner("Circle");
        return;
      }
    }

    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      if (board[0][0] === "circle") {
        displayWinner("Circle");
        return;
      } else {
        displayWinner("Cross");
        return;
      }
    }

    if (
      board[0][2] !== "" &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      if (board[0][2] === "circle") {
        displayWinner("Circle");
        return;
      } else {
        displayWinner("Cross");
        return;
      }
    }
  };

  const displayWinner = (winner) => {
    Swal.fire({
      title: "Game Over!",
      text: `Hurray, ${winner} is the winner!`,
      icon: "success",
      confirmButtonText: "Cool",
    });
    isGameOver = true;
    resetBoard();
  };

  const resetBoard = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setActivePlayer("cross");
  };

  return (
    <section className="bg-primary">
      <div className="container max-w-5xl mx-auto flex flex-col space-y-16 h-screen w-full items-center justify-center px-8 md:px-0">
        <div>
          <h1 className="uppercase text-3xl text-gray-400 tracking-wider flex flex-row items-center">
            TIC T<FaReact className="h-7" />E TAC
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-3 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] h-[50%] md:h-[60%] bg-lightGreen/90">
          <div className="group block" onClick={() => handleRowClick(0, 0)}>
            {board[0][0] === "" ? (
              <></>
            ) : board[0][0] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[0][0] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(0, 1)}>
            {board[0][1] === "" ? (
              <></>
            ) : board[0][1] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[0][1] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(0, 2)}>
            {board[0][2] === "" ? (
              <></>
            ) : board[0][2] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[0][2] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(1, 0)}>
            {board[1][0] === "" ? (
              <></>
            ) : board[1][0] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[1][0] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(1, 1)}>
            {board[1][1] === "" ? (
              <></>
            ) : board[1][1] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[1][1] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(1, 2)}>
            {board[1][2] === "" ? (
              <></>
            ) : board[1][2] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[1][2] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(2, 0)}>
            {board[2][0] === "" ? (
              <></>
            ) : board[2][0] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[2][0] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(2, 1)}>
            {board[2][1] === "" ? (
              <></>
            ) : board[2][1] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[2][1] === "" ? (
              activePlayer === "cross" ? (
                <RxCross1 className="hidden-block__item" />
              ) : (
                <BsCircle className="hidden-block__item" />
              )
            ) : (
              <></>
            )}
          </div>
          <div className="group block" onClick={() => handleRowClick(2, 2)}>
            {board[2][2] === "" ? (
              <></>
            ) : board[2][2] === "cross" ? (
              <RxCross1 className="block__item" />
            ) : (
              <BsCircle className="block__item" />
            )}
            {board[2][2] === "" ? (
              activePlayer === "cross" ? (
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
          <span className="text-xl">Next Turn:</span>
          {activePlayer === "cross" ? (
            <RxCross1 className="h-5 w-5 text-gray-500" />
          ) : (
            <BsCircle className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
