// @ts-ignore
import React from 'react';

// @ts-ignore
function Panel({ ratio, caption ,page_number,index}) {
    return (
        <div className={`panel ratio${ratio}`}>
            <img src={`images/output_${page_number}_${index}.jpg`} alt={`Panel ${caption}`} className="panel-image" loading="lazy" />
            <div className="caption">{caption}</div>
        </div>
    );
}

export default Panel;
