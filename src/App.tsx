import * as React from "react";
import {Box, Modal} from "@mui/material";

import "./App.css";

import ImageCalendar from "./assets/icons8-birthday-96.png";
import ImageHbd from "./assets/Happy-Birthday.svg";
import ImageGift from "./assets/Pleasant-surprise.svg";
import ImageKiss from "./assets/kiss.jpeg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start flex justify-center items-center snap-always h-screen w-screen">
        <div className="flex flex-col items-center">
          <span className="text-black font-bold text-lg">HEY</span>
          <span className="text-black font-bold mt-1 text-lg">ITS YOUR</span>
          <span className="text-black font-bold mt-2 mb-2 text-3xl">
            BIRTHDAY!
          </span>
          <img src={ImageCalendar} alt="calendar" />
        </div>
      </section>
      <section className="snap-start flex justify-start items-center snap-always h-screen w-screen flex-col pt-12">
        <img className="w-full" src={ImageHbd} alt="hbd" />
        <span className="font-bold mt-4 text-xl">HAPPY 21th BIRTHDAY!</span>
        <div className="flex flex-col">
          <span className="font-bold mt-4 text-4xl">Kania Dewi</span>
          <span className="text-end">my babe &#9829;</span>
        </div>
        <span className="text-center mt-4 mx-12 font-semibold">
          I want to wish you much health, love, happiness and freedom in your
          dreams. Wish you eternal youth, original ideas, big success in
          everything you do! Be happy!
        </span>
      </section>
      <section className="snap-start flex justify-start items-center snap-always h-screen w-screen flex-col pt-20">
        <img className="w-full" src={ImageGift} alt="hbd" />
        <span className="font-bold mt-8 text-3xl">GET YOUR GIFT!</span>
        <button
          className="px-8 py-2 rounded-3xl font-semibold mt-4"
          onClick={handleOpen}
        >
          Open Your Gift
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="p-0"
        >
          <Box sx={style}>
            <img src={ImageKiss} alt="kiss" />
          </Box>
        </Modal>
      </section>
    </div>
  );
}

export default App;
