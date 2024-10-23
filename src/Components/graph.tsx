import ForceGraph2D from 'react-force-graph-2d';
import './graph.css'
import Puzzle from '../Puzzle';

export interface IProps {
    puzzle: Puzzle,
    player: number[]
}

export default function Graph(props: IProps) {
    const myData = {
        "nodes": [],
        "links": []
    } 

    // let tempPlayer: number[] = props.player;

    // const myData = {
    //     "nodes": [
    //         {
    //             "id": "id1",
    //             "name": "name1",
    //             "val": 1
    //         },
    //         { 
    //             "id": "id2",
    //             "name": "name2",
    //             "val": 1 
    //         }
    //     ],
    //     "links": [
    //         {
    //             "source": "id1",
    //             "target": "id2"
    //         }
    //     ]
    // } 

    return (
        <div className="graph">
            graph
            <div className="graphwindow">
                <ForceGraph2D 
                    graphData={myData} 
                    width={800}
                    height={800}
                    backgroundColor={'light'}
                />
            </div>
        </div>
    )
}