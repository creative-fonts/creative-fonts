import React, { useState, useEffect } from "react";
import FontDetails from "./FontDetails";
import "./preview.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import fonts from "./fonts.json";
const Preview = () => {
  // const [isActive, setisActive] = useState(false);
  const [fontDetail, setfontDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const { fontId } = useParams();
  const baseUrlDownload = "https://cdn.jsdelivr.net/npm";

  useEffect(() => {
    // setLoading(true);
    if (fontId) {
      setLoading(true);
      const dir = `${baseUrlDownload}/@creative-fonts/${fontId}/metadata.json`;

      const fetchData = async () => {
        const resp = await fetch(dir);
        if (!resp.ok) {
          const message = `An error has occured: ${resp.status}`;
          throw new Error(message);
        }
        var data = await resp.json();
        setfontDetail(data);
        setLoading(false);
      };
      fetchData().catch(console.error);
      // const fonturl = fetchUrl(fontId);
    }
  }, [fontId]);

  return (
    <div className="preview">
      <div className="fonts">
        <h2>FONT-NAME</h2>

        <div className="font-list">
          {fonts.slice(0, fonts.length).map((font) => (
            <NavLink
              to={`/preview/${font.fontId}`}
              key={font.fontName}
              className="font-name"
            >
              <div>{font.fontName}</div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="preview-main">
        <FontDetails fontDetail={fontDetail} loading={loading} />
      </div>
    </div>
  );
};

export default Preview;
