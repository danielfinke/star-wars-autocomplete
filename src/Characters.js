import React from 'react';
import { connect } from 'react-redux';

import Character from './Character';

const Characters = ({ characters = [] }) => {
  return (
    <section className="Characters">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </section>
  );
};

const mapStateToProps = ({ characters }) => ({ characters });

export default connect(mapStateToProps)(Characters);
