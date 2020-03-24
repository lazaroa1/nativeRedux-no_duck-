import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RepositoriesActions from '../../store/actions/login';
import {Container} from './styles';
import {ActivityIndicator, Text} from 'react-native';

class Reporsitories extends Component {
  componentDidMount() {
    const {loadRepositoriesRequest} = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const {reporsitories} = this.props;

    return (
      <Container>
        {reporsitories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          reporsitories.data.map(repo => <Text key={repo.id}>{repo.name}</Text>)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  reporsitories: state.reporsitories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reporsitories);
