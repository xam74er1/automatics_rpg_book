import React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel';

// @ts-ignore
function Page({ captions, pageNum, flipped, onClick,index,zindex }) {

    // Define a variable to hold the z-index value based on the condition.
    //const zIndexValue = key % 2 === 0 ? zindex : 'auto';

    // Define the style object to include the z-index property.
    const pageStyle = {
        zIndex: zindex,
    };

    /*

            <div className="row">
                <Panel caption={captions[2].original_phrase} page_number={pageNum} index={3} ratio={2} />
                <Panel caption={captions[3].original_phrase} page_number={pageNum} index={4} ratio={1} />
            </div>
     */

    return (
        <div className={`page ${flipped ? 'flipped' : ''}`} onClick={onClick} style={pageStyle}>
            <div className="row">
                <Panel caption={captions} page_number={pageNum} index={index} ratio={1} />,
            </div>
        </div>
    );
}

Page.propTypes = {
    captions: PropTypes.string.isRequired,
    pageNum: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    zindex :PropTypes.any.isRequired,
    index :PropTypes.number.isRequired,
};

export default Page;
