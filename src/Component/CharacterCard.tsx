const CharacterCard = ({character,romanji}: {character : string , romanji : string} ) => {
    return (
        <div className={'card'}>
            <div className="card__inner">
                <div className="card__face card__face--front">
                    <span className="card__character">{character}</span>
                    <span className="card__romanji">{romanji}</span>
                </div>
            </div>
        </div>
    );
};
export default CharacterCard;