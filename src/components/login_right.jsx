import React, { useState } from "react";
import SubtractImage0 from "../assets/Subtract0.svg";
import git from "../assets/git.svg";
import azure from "../assets/azure.svg";
import Bitbucket from "../assets/Bitbucket.svg";
import gitlab from "../assets/gitlab.svg";
import sso from "../assets/sso.svg";
import { Button } from "./ui/button";

const LoginRight = () => {
  const [selectedTab, setSelectedTab] = useState("SAAS");

  return (
    <div className="flex justify-center h-full border-l border-[#D8DAE5] bg-whitebg px-4">
      <div className="w-full max-w-[672px]">
        <div className="flex flex-col items-center bg-white h-[574px] mt-24 sm:mt-[130px] pb-8  rounded-[12px] border border-[#D8DAE5]">
          <div className="flex items-center mt-[36px]">
            <div className="w-[28px] h-[31px]">
              <img src={SubtractImage0} alt="CodeAnt AI Logo" />
            </div>
            <div className="text-text_blue text-2xl sm:text-3xl font-satoshi ml-2">
              CodeAnt AI
            </div>
          </div>
          <div className="font-inter text-2xl sm:text-3xl font-semibold text-text_gray mt-4 sm:mt-6 mb-6 text-center">
            Welcome to CodeAnt AI
          </div>

          <div className="flex sm:flex-row items-center w-full px-4 sm:px-8">
            <Button
              className={`flex-1 text-center text-xl font-semibold py-3 ${
                selectedTab === "SAAS"
                  ? "bg-[#1570EF] text-white"
                  : "bg-whitebg text-[#414651] border border-[#D8DAE5]"
              }`}
              onClick={() => setSelectedTab("SAAS")}
            >
              SAAS
            </Button>
            <Button
              className={`flex-1 text-center text-xl font-semibold py-3 ${
                selectedTab === "Self Hosted"
                  ? "bg-[#1570EF] text-white"
                  : "bg-whitebg text-[#414651] border border-[#D8DAE5]"
              }`}
              onClick={() => setSelectedTab("Self Hosted")}
            >
              Self Hosted
            </Button>
          </div>

          <hr className="w-full mt-[28px] bg-light_gray mb-[26px]" />
          {selectedTab === "SAAS" && (
            <div className="flex flex-col font-inter items-center gap-4 w-full px-4 sm:px-8">
              <Button className="w-full h-[58px] sm:w-[446px] flex items-center justify-center gap-2 bg-white text-[#171717] text-[16px] border border-[#D8DAE5]">
                <img src={git} className="w-[25px] h-[25.59px]" />
                Sign in with GitHub
              </Button>
              <Button className="w-full h-[58px] sm:w-[446px] flex items-center justify-center gap-2 bg-white text-[#171717] text-[16px] border border-[#D8DAE5]">
                <img src={Bitbucket} className="w-[25px] h-[25.59px]" />
                Sign in with Bitbucket
              </Button>
              <Button className="w-full h-[58px] sm:w-[446px] flex items-center justify-center gap-2 bg-white text-[#171717] text-[16px] border border-[#D8DAE5]">
                <img src={azure} className="w-[25px] h-[25.59px]" />
                Sign in with Azure DevOps
              </Button>
              <Button className="w-full h-[58px] sm:w-[446px] flex items-center justify-center gap-2 bg-white text-[#171717] text-[16px] border border-[#D8DAE5]">
                <img src={gitlab} className="w-[25px] h-[25.59px]" />
                Sign in with GitLab
              </Button>
            </div>
          )}
          {selectedTab === "Self Hosted" && (
            <div className="flex flex-col font-inter items-center gap-4 w-full px-4 sm:px-8">
              <Button className="w-full h-[58px] sm:w-[446px] flex items-center justify-center gap-2 bg-white text-[#171717] text-[16px] border border-[#D8DAE5]">
                <img src={gitlab} className="w-[25px] h-[25.59px]" />
                Self Hosted GitLab
              </Button>
              <Button className="w-full h-[58px] sm:w-[446px] flex items-center justify-center gap-2 bg-white text-[#171717] text-[16px] border border-[#D8DAE5]">
                <img src={sso} className="w-[25px] h-[25.59px]" />
                Sign in with SSO
              </Button>
            </div>
          )}
        </div>
        <div className="mt-8 mb-4 font-inter text-center text-[14px] sm:text-[16px] text-[#181D27]">
          By signing up you agree to the{" "}
          <span className="font-bold cursor-pointer">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default LoginRight;
