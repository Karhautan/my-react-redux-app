
const url = 'images/photo.webp'

export const BackgroundImage = () => {
    return (
        <div className="background-image-container">
        <img src={url} alt="background" id="background-image"/>
        </div>
    );
}
