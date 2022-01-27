const DescriptionPage = () => {
    return (
        <>
        <h1>On this application have different routes:</h1>
        <ol>
            <li>  /home</li>
            <li><p>/{"<param>"}</p>
                 <ul>
                     <li>param can be a Number</li>
                     <li>param can be a Word</li>
                </ul>
            </li>
            <li><p>/{"<param>"}/{"<Color text>"}/{"<Color background>"}</p></li>
        </ol>
        </>
     );
}

export default DescriptionPage;