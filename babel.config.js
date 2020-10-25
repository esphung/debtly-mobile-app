module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src',
          colors: './src/colors',
          screens: './src/screens',
          navigators: './src/navigators',
          components: './src/components',
          assets: './assets'
        },
      },
    ],
  ],
  };
};
