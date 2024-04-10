import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Clipboard } from "lucide-react";
import { ClipboardCheck } from "lucide-react";

const CodeBlock = ({ codeString, language }) => {
  const [copy, setcopy] = useState(false);

  return (
    <div className="min-2-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
      <div className="flex justify-between px-4 text-white text-xs items-center">
        <p className="text-sm"></p>
        {copy ? (
          <button className="py-1 inline-flex items-center gap-1">
            <span className="text-base mt-1">
              <ClipboardCheck size={"18px"} />
            </span>
            Copied
          </button>
        ) : (
          <button
            className="py-1 inline-flex items-center gap-1"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              setcopy(true);
              setTimeout(() => {
                setcopy(false);
              }, 3000);
            }}
          >
            <span className="text-base mt-1">
              <Clipboard size={"18px"} />
            </span>
            Copy Code
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          padding: "12px",
        }}
        wrapLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
