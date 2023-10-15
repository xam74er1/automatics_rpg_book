import React, { useEffect, useState } from 'react';
import '../App.css';
import Page from './Page'; // Assuming you have a Page component
import './Book.css';
import Panel from './Panel';

function MainContainer() {
    const [pages, setPages] = useState([]);
    const [flippedPages, setFlippedPages] = useState(new Set());

    useEffect(() => {
        // Fetch data.json and update pages state
        fetch('./data.json')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    // @ts-ignore
                    setPages(data);
                }
            })
            .catch((error) => {
                console.error('Error reading JSON file:', error);
            });
    }, []);

    const handlePageClick = (pageNum: number) => {
        console.log("click",pageNum)

        if (flippedPages.has(pageNum)) {
            setFlippedPages((prevFlippedPages) => {
                const newFlippedPages = new Set(prevFlippedPages);
                newFlippedPages.delete(pageNum);
                newFlippedPages.delete(pageNum-1);
                return newFlippedPages;
            });
        } else {
            setFlippedPages((prevFlippedPages) => {
                const newFlippedPages = new Set(prevFlippedPages);
                newFlippedPages.add(pageNum);
                newFlippedPages.add(pageNum+1);
                return newFlippedPages;
            });
        }
    };

    function getAllPanel(){
        let allPanek=[]
        let counter = 0
        for (let page_number = 0; page_number < pages.length; page_number++) {
            let curent_page = pages[page_number]
            // @ts-ignore
            for (let panelIndex = 0; panelIndex < curent_page.length; panelIndex++) {
                counter +=1
                let p_couter = counter
                let zIndexValue = p_couter % 2 === 1 ?(4*pages.length)-counter : 'auto';
                // @ts-ignore
                let caption = curent_page[panelIndex].original_phrase
                let panel = <Page
                        key={counter}
                        captions={caption}
                        pageNum={page_number}
                        flipped={ (flippedPages.has(p_couter+1) )}
                        onClick={() => handlePageClick(p_couter+1)}
                        zindex={zIndexValue}
                        index={panelIndex+1}></Page>

                allPanek.push(panel)
            }
        }

        return allPanek
    }

    if (pages.length > 0) {
        // @ts-ignore
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Lovers+Quarrel" rel="stylesheet" />
                <div className="book">
                    <div id="pages" className="pages">

                        {getAllPanel()}

                    </div>
                </div>
            </div>
        );
    }

    return <div>Loading...</div>;
}

export default MainContainer;
