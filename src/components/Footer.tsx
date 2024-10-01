const Footer = () => {
  return (
    <div className="px-6 my-[100px] w-[100%]">
      <div className="w-[100%] flex flex-wrap gap-10 justify-between">
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Company</p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              About
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Jobs
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              For the Record
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Communities</p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              For Artists
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Developers
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Advertising
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Investors
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Vendors
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Useful links</p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Support
            </p>
            <p className="text-zinc-400 hover:text-white hover:underline hover:cursor-pointer">
              Free Mobile App
            </p>
          </div>
        </div>       
      </div>

      <div className="w-[100%] h-[1px] my-10 bg-zinc-500"></div>

      <div className="w-[100%] flex flex-wrap gap-10 justify-between">
        <div className="flex flex-wrap gap-5">
          <p className="text-[14px] text-zinc-400 hover:text-white hover:cursor-pointer">
            Support
          </p>
          <p className="text-[14px] text-zinc-400 hover:text-white hover:cursor-pointer">
            Privacy Center
          </p>
          <p className="text-[14px] text-zinc-400 hover:text-white hover:cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-[14px] text-zinc-400 hover:text-white hover:cursor-pointer">
            Cookies
          </p>
          <p className="text-[14px] text-zinc-400 hover:text-white hover:cursor-pointer">
            About Ads
          </p>
          <p className="text-[14px] text-zinc-400 hover:text-white hover:cursor-pointer">
            Accessibility
          </p>
        </div>

        <p className="text-[14px] text-zinc-400">© 2024 MySpotify AB</p>
      </div>
    </div>
  );
};

export default Footer;
