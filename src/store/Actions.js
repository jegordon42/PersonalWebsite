const changeTheme = (theme) => (
    {
      type: 'CHANGE_THEME',
      data: {theme}
    }
  );
  
  export {changeTheme}