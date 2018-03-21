import React from 'React';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress,children }) => {
  const { buttonStyle, textStyle } = Styles;
  return (
    // Highlightaa nätisti ja onPress käsittelee painalluksen
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
    {children}
    </Text>
    </TouchableOpacity>
  );
};

const Styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
