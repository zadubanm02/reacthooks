import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview, } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import { transformSync } from "@babel/core";




const Live = ({ code, scope }) => (
    <LiveProvider
        scope={scope}
        theme={dracula}
        code={code}
        transformCode={(code) => {
            const transformed = transformSync(code, {
                plugins: [
                    require("@babel/plugin-syntax-jsx"),
                    [
                        require("@babel/plugin-transform-react-jsx-source"),
                        { loose: true },
                    ],
                ],
            }).code;
            console.log(transformed);
            return code;
        }}
    >
        <div className="row">
            <div className="col-6"> <LiveEditor /></div>
            <div className="col-6"><LivePreview /></div>
            <LiveError />
        </div>
    </LiveProvider>
);

export default Live;
