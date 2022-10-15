const path = require('path');

export {};

const resolvePath = (p: string) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/app/components'),
      '@shared': resolvePath('./src/app/shared'),
      '@assets': resolvePath('./src/app/assets'),
      '@shared/components': resolvePath('src/app/shared/components'),
    }
  },
}