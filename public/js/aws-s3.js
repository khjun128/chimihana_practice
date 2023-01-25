var albumBucketName = 'data.bbanggu.co.kr';
var bucketRegion = 'ap-northeast-2';
var IdentityPoolId = 'ap-northeast-2:264cf9dd-6363-41d4-8707-f664547512f4';

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: albumBucketName}
});