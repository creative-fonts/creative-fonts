import { Slider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./fontdetails.css";
import { GoLinkExternal } from "react-icons/go";
import { HeadProvider } from "react-head";

import CopyButton from "../CopyButton/CopyButton";

const FontDetails = ({ fontDetail, loading }) => {
  const { fontId } = useParams();
  // console.log("Hello world");

  const [previewText, setpreviewText] = useState(
    "The quick brown fox jumps over the lazy dog."
  );

  const [fontSize, setFontSize] = useState(40);

  const [fontCss, setFontCss] = useState();

  const baseUrlDownload = "https://cdn.jsdelivr.net/npm";

  async function DownloadCss(fontId) {
    const url = `${baseUrlDownload}/@creative-fonts/${fontId}/index.css`;
    const fonturl = `${baseUrlDownload}/@creative-fonts/${fontId}`;

    // console.log(fonturl);

    const resp = await fetch(url);
    if (!resp.ok) {
      const message = `An error has occured: ${resp.status}`;
      throw new Error(message);
    }
    var data = await resp.text();
    data = data.replace(/url\("\.\/(fontfile\/.*?)"\)/, `url('${fonturl}/$1')`);

    setFontCss(data);
  }

  useEffect(() => {
    DownloadCss(fontId);
  }, [fontId]);

  const handleSliderChange = (event, newValue) => {
    setFontSize(newValue);
  };

  //commands
  const command1 = `npm install @creative-fonts/${fontId}`;
  const command2 = `yarn add @creative-fonts/${fontId}`;
  const command3 = `import "@creative-fonts/${fontId}"`;
  const command4 = `body { font-family: "${fontDetail.fontName}"; }`;

  if (loading) return <Spinner message={"Loading font details..."} />;
  else if (!fontId)
    return (
      <div className="preview-open">
        <h3>Lets get you a Creative-font!</h3>
      </div>
    );
  else
    return (
      <>
        <HeadProvider>
          <style>{fontCss}</style>
        </HeadProvider>

        <div className="font-heading">
          {fontDetail && <h2 id="preview-font-head">{fontDetail.fontName}</h2>}
          <div className="font-links">
            <a
              className="tooltip"
              href={`https://github.com/creative-fonts/creative-fonts/packages/${fontDetail.fontId}#readme`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/40/000000/github--v3.png"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.npmjs.com/package/@creative-fonts/${fontDetail.fontId}`}
            >
              <img
                src="https://img.icons8.com/color/40/000000/npm.png"
                alt="npm"
              />
            </a>
          </div>
        </div>
        <hr />
        <div className="font-preview">
          <input
            value={previewText}
            onChange={(e) => setpreviewText(e.target.value)}
            style={{
              fontFamily: `"${fontDetail.fontName}"`,
              fontSize: `${fontSize}px`,
              height: `${fontSize + 18}px`,
            }}
          />
        </div>
        <Slider
          className="slider"
          min={15}
          max={180}
          valueLabelDisplay="auto"
          value={fontSize}
          aria-labelledby="input-slider"
          onChange={handleSliderChange}
        />
        <div className="sub-details">
          <h3>Installation</h3>
          <ul>
            <li>
              <p>Install the dependency using:</p>
            </li>
            <p className="command">
              {command1}
              <CopyButton text={command1} />
            </p>
            OR
            <p className="command">
              {command2}
              <CopyButton text={command2} />
            </p>
            <li>
              <p>
                Within your app entry file or site component, import the font
                like:
              </p>
            </li>
            <p className="command">
              {command3}
              <CopyButton text={command3} />
            </p>
            <li>
              <p>
                Now, you can reference the font name in a CSS stylestyle sheet,
                CSS Module, or CSS-in-JS:
              </p>
            </li>
            <p className="command">
              {command4}
              <CopyButton text={command4} />
            </p>
          </ul>
          <h3>License</h3>
          <p>
            {`All the fonts available on creative-fonts are licensed as FREE for
            commercial use by their creators. creative-fonts does not claim any of the font as its
            own.Hence, All the rights of ${fontDetail.fontName} font are owned by its
            creator.`}
          </p>
          <br></br>
          <h3>Other</h3>
          <p>
            Any bugs, suggestions or ideas can be voiced via an{" "}
            <a
              href="https://github.com/creative-fonts/creative-fonts/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              issue <GoLinkExternal />
            </a>
          </p>
        </div>
      </>
    );
};

export default FontDetails;
