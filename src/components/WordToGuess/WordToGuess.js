import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchWord } from "actions/letterActions";

class WordToGuess extends React.Component {
  componentDidMount() {
    this.props.fetchWord();
  }

  render() {
    return <div>{this.props.word}</div>;
  }
}

WordToGuess.propTypes = {
  fetchWord: PropTypes.func.isRequired,
  word: PropTypes.string
};

const mapStateToProps = state => ({
  word: state.letters.word
});

export default connect(mapStateToProps, { fetchWord })(WordToGuess);
