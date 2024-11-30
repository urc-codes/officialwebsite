"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2, Copy } from "lucide-react";
import Image from "next/image";

interface ShareBlogPopoverProps {
  url: string;
}

const ShareBlogPopover: React.FC<ShareBlogPopoverProps> = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Popover>
      <PopoverTrigger className="text-blue-600 hover:underline cursor-pointer flex items-center">
        <Share2 className="w-4 h-4 mr-1" /> Share
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="text-center flex justify-between items-center">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />

          <button
            onClick={handleCopy}
            className="flex items-center justify-center p-2 bg-white rounded-lg transition-colors duration-200 hover:bg-white"
          >
            <Copy className="w-5 h-5 mr-2" />
            <span>{copied ? "Link Copied!" : "Copy Link"}</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareBlogPopover;
