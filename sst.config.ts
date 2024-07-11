/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'next-starter-with-payload',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  async run() {
    const bucket = new sst.aws.Bucket('NextStarterWithPayloadBucket')

    const site = new sst.aws.Nextjs('NextStarterWithPayloadWebsite', {
      environment: {
        NODE_ENV: process.env.NODE_ENV!,
        DATABASE_URL: process.env.DATABASE_URL!,
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET!,
      },
      domain: $app.stage === 'production' ? 'next-starter-with-payload.prodioslabs.com' : undefined,
      link: [bucket],
    })

    return {
      url: site.url,
    }
  },
})
