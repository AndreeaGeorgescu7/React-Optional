const Image = ({ id, source, altText, className ,width, height, padding,background_color}) => {
    return <img id={id} src={source} alt={altText} className={className} width={width} height={height} padding={padding} background_color="white"/>;
  };
  
export default Image;