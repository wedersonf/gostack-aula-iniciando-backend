interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'wederson@compactjr.com',
      name: 'Wederson da CompAct Jr',
    },
  },
} as IMailConfig;
