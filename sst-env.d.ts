/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    NextStarterWithPayloadBucket: {
      name: string
      type: "sst.aws.Bucket"
    }
    NextStarterWithPayloadWebsite: {
      type: "sst.aws.Nextjs"
    }
  }
}
export {}