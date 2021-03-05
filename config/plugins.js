module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', 'diq15figg'),
        api_key: env('CLOUDINARY_KEY', '267765153562841'),
        api_secret: env('CLOUDINARY_SECRET', 'IlKRFlY-DrVYNBfG66ORaRakv1Q'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  });