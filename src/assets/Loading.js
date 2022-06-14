import { ThreeDots } from "react-loader-spinner";

function Loading({ height, width }) {
    return (
        <ThreeDots
            type="ThreeDots"
            color="#FFF"
            height={height}
            width={width}

        />
    );
}

export default Loading;