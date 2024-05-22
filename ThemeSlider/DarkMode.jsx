import { useState } from "react";

const DarkMode = () => {

    const [selectedMode, setSelectedMode] = useState("light");
    return (
        <>
            <section className="flex w-1/2 h-[200px] justify-around items-center border border-red-200">
                <div className="">
                    <button
                        className={`${selectedMode === "light" ? "lightie" : "darkie"} button-style`}
                        onClick={() => setSelectedMode("light")}
                    >
                        <span className=" text-baseTextColor bg-baseBgColor">
                            Light Mode
                        </span>
                    </button>
                </div>
                <br /><br />
                <div className="">
                    <button
                        className={`${selectedMode === "dark" ? "darkie" : "lightie"} button-style`}
                        onClick={() => setSelectedMode("dark")}
                    >
                        <span className=" text-baseTextColor bg-baseBgColor">
                            Dark Mode
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default DarkMode;
