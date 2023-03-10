"use client"

import { useAuth } from '../context/AuthContext'
import Login from "../components/Login"
import List from "../components/users/list"



export default function Home() {
  const { currentUser } = useAuth()

  return (
    <div>
      <p>Should be pretty quick. It's or jobs that are in the weighted coupon summary job stream.
0:2:45.490 --> 0:2:52.630
Jeff Bloom
Two of them run weekly on which basically take the output from RX714, which we covered previously.
0:2:53.990 --> 0:3:3.660
Jeff Bloom
And loads it into a difficult table and then there are two other jobs which run monthly per Sunday of the fiscal month.
0:3:4.350 --> 0:3:10.260
Jeff Bloom
Which takes the weekly data aggregated and I'll put a file that's sent up to the mainframe.
0:3:12.210 --> 0:3:13.840
Jeff Bloom
Far as the pipeline goes.
0:3:16.330 --> 0:3:19.940
Jeff Bloom
That's built by the weighted coupon summary CI CD pipeline.
0:3:21.390 --> 0:3:23.80
Jeff Bloom
Standard function app.
0:3:24.180 --> 0:3:24.890
Jeff Bloom
The deployment.
0:3:26.230 --> 0:3:29.200
Jeff Bloom
So the build and then based on whichever branch.
0:3:30.620 --> 0:3:40.480
Jeff Bloom
The comment was made to either deploys the Dev and Test Dev that's coming out of the dev branch, or if it's a commit into the the master branch, it goes to production.
0:3:42.900 --> 0:3:44.670
Jeff Bloom
Standard function have deployed.
0:3:48.100 --> 0:3:48.430
Jeff Bloom
Right.
0:3:49.860 --> 0:3:52.390
Jeff Bloom
And as far as Azure resources go.
0:3:58.90 --> 0:3:59.60
Jeff Bloom
Is the.
0:4:0.320 --> 0:4:2.110
Jeff Bloom
Standard for resources for a function app.
0:4:3.350 --> 0:4:10.410
Jeff Bloom
App insights for for logging the farm and the function app itself, and then a storage account for.
0:4:11.300 --> 0:4:13.50
Jeff Bloom
Containing the input and output files.
0:4:21.70 --> 0:4:22.480
Jeff Bloom
That's my job name.
0:4:28.50 --> 0:4:29.890
Jeff Bloom
The the CLX jobs here.
0:4:30.730 --> 0:4:32.240
Jeff Bloom
For Weigert coupon summary.
0:4:33.610 --> 0:4:34.90
Jeff Bloom
Standard.
0:4:34.920 --> 0:4:36.630
Jeff Bloom
Up there, take a look at the readme.
0:4:45.390 --> 0:4:50.850
Jeff Bloom
The Alex 702 will copy the general Ledger source file in the BLOB storage and we've followed by C LX703.
0:4:51.510 --> 0:4:53.570
Jeff Bloom
Which does a bulk insert into.
0:4:54.500 --> 0:4:57.230
Jeff Bloom
The accounts receivable lady coupon summer table.
0:4:58.240 --> 0:5:6.660
Jeff Bloom
That's the weekly processes and then uh, the monthly processes. CLX 801 executes the SQL statement that aggregates the weekly data.
0:5:7.480 --> 0:5:12.30
Jeff Bloom
And then uploads the file and then 802 is what transferred it up to the mainframe.
0:5:12.810 --> 0:5:14.760
Jeff Bloom
I'm three functions.
0:5:16.460 --> 0:5:17.680
Jeff Bloom
All HTTP triggers.
0:5:20.50 --> 0:5:20.840
Jeff Bloom
You look at the.
0:5:21.950 --> 0:5:22.680
Jeff Bloom
Current state.
0:5:23.690 --> 0:5:32.300
Jeff Bloom
Umm, you got the CX702 job, which is filing submitted as a block BLOB copy of the General Ledger stores file to BLOB storage.
0:5:33.240 --> 0:5:42.90
Jeff Bloom
And then it triggers CLX 703, which grabs the file and then loads it into the the dicka leading coupons coupon summary table.
0:5:43.560 --> 0:5:49.990
Jeff Bloom
And then if it's the first Sunday of the fiscal month, see like 703 would trigger CLX 801.
0:5:50.690 --> 0:5:54.300
Jeff Bloom
Which is another Azure fry requester job which calls the extract function.
0:5:55.710 --> 0:5:58.60
Jeff Bloom
Which pulls the data from the difficult table.
0:5:59.540 --> 0:6:1.420
Jeff Bloom
And then saves it the BLOB storage.
0:6:3.110 --> 0:6:9.260
Jeff Bloom
And then once that successful, we'll trigger CLX 802, which sends it up to the mainframe.
0:6:19.690 --> 0:6:20.440
Jeff Bloom
Someone throw away.
0:6:21.470 --> 0:6:24.280
Jeff Bloom
The the jobs themselves are are have been pretty stable.
0:6:26.530 --> 0:6:30.150
Jeff Bloom
I only have one incident that's come through.
0:6:31.160 --> 0:6:40.650
Jeff Bloom
And that was basically because there was a variable that was not set after the deploy was updated. Other than that, job itself is pretty stable.
0:6:43.230 --> 0:6:44.170
Jeff Bloom
Have No 3.
0:6:46.430 --> 0:6:53.100
Jeff Bloom
And once once the parameter was added or the configuration setting was added and then it ran successfully.
0:6:57.260 --> 0:6:59.90
Jeff Bloom
Yeah, standard standard TBA's.
0:7:0.250 --> 0:7:1.520
Jeff Bloom
Profile and submitter.
0:7:5.670 --> 0:7:9.320
Jeff Bloom
Using the Black Bloc mode to send the input file up weekly.
0:7:15.340 --> 0:7:18.0
Jeff Bloom
And then the weekly Azure file requester job.
0:7:19.280 --> 0:7:20.970
Jeff Bloom
That's set up to load that data file.
0:7:21.730 --> 0:7:23.50
Jeff Bloom
Into disca.
0:7:28.920 --> 0:7:30.250
Jeff Bloom
And then a monthly.
0:7:32.950 --> 0:7:34.280
Jeff Bloom
Jobs which are.
0:7:35.870 --> 0:7:40.990
Jeff Bloom
As you probably request her job to extract the lady coupon summary file itself.
0:7:43.130 --> 0:7:44.810
Jeff Bloom
Which is an aggregate of the entire month.
0:7:46.360 --> 0:7:50.890
Jeff Bloom
And then the TPS job, which transfers that up to the mainframe.
0:7:55.950 --> 0:7:58.220
Jeff Bloom
Do you not see Alex? 802 TPS player?
0:8:0.780 --> 0:8:4.870
Jeff Bloom
And that is pretty much it any any questions?
0:8:15.150 --> 0:8:15.440
Jeff Bloom
Set.
0:8:16.540 --> 0:8:17.750
Patrick Valasek
Great. Thanks you.
0:8:20.70 --> 0:8:21.210
Patrick Valasek
All right, Jeff G.
0:8:21.840 --> 0:8:22.680
Patrick Valasek
Let's go to you.
0:8:23.510 --> 0:8:24.450
Jeffrey Gruttadauria
Alright.
0:8:34.220 --> 0:8:34.450
Jeffrey Gruttadauria
OK.
0:8:34.520 --> 0:8:50.420
Jeffrey Gruttadauria
OK, so the first one that I'm going to go over today is W retail. This is effectively a a job stream that looks up all of the BBR's with.
0:8:51.530 --> 0:8:55.40
Jeffrey Gruttadauria
With the W retail terms.
0:8:55.560 --> 0:8:55.930
Jeffrey Gruttadauria
Uh.
0:8:57.720 --> 0:9:5.670
Jeffrey Gruttadauria
That on them and we use it to generate 2 piles. So the first file is a.
0:9:6.740 --> 0:9:8.670
Jeffrey Gruttadauria
File for every.
0:9:9.700 --> 0:9:21.770
Jeffrey Gruttadauria
Every product associated with any of those BRB's with W retail terms and it's 11 record per product per active store.
0:9:22.820 --> 0:9:23.310
Jeffrey Gruttadauria
On.
0:9:24.290 --> 0:9:26.580
Jeffrey Gruttadauria
And the other one is.
0:9:27.590 --> 0:9:30.120
Jeffrey Gruttadauria
Is effectively a file.
0:9:31.380 --> 0:9:35.250
Jeffrey Gruttadauria
For all of the other products that are.
0:9:36.360 --> 0:9:47.950
Jeffrey Gruttadauria
On in the same product group, so department, category and class as one of the products that's associated with a W retail BBR. But it is.
0:9:48.430 --> 0:9:59.740
Jeffrey Gruttadauria
Uh, but the product themselves is not associated with the BBR, so I believe that file is 1 record per product.
0:10:2.150 --> 0:10:21.150
Jeffrey Gruttadauria
Worth noting is this also skips any shipper products and so any products containing containing merchandise as well as any products that have been discontinued or are otherwise invalid like that have been suspended for the season or something along those lines.
0:10:23.470 --> 0:10:26.900
Jeffrey Gruttadauria
Umm, as far as.
0:10:27.910 --> 0:10:34.160
Jeffrey Gruttadauria
Where this gets built gets built under the Solu project in the.
0:10:35.210 --> 0:10:36.460
Jeffrey Gruttadauria
W retail.
0:10:37.380 --> 0:10:41.590
Jeffrey Gruttadauria
Continuous continuous integration pipeline.
0:10:42.540 --> 0:10:48.60
Jeffrey Gruttadauria
And what this looks like is the standard build followed by.
0:10:49.190 --> 0:10:54.80
Jeffrey Gruttadauria
A number of environment deployments and BDD tests.
0:10:56.40 --> 0:10:57.590
Jeffrey Gruttadauria
We take a look at this.
0:10:58.320 --> 0:11:1.40
Jeffrey Gruttadauria
You know, there's a section here for.
0:11:2.360 --> 0:11:4.680
Jeffrey Gruttadauria
For deploying the changes.
0:11:5.690 --> 0:11:10.650
Jeffrey Gruttadauria
To Azure or sorry, the infrastructure to Azure and tagging it.
0:11:11.410 --> 0:11:14.160
Jeffrey Gruttadauria
Umm, there's steps here for.
0:11:15.770 --> 0:11:22.880
Jeffrey Gruttadauria
For adding secrets to the configuration files, these secrets are pulled from the.
0:11:23.940 --> 0:11:29.790
Jeffrey Gruttadauria
The variables section under or. Sorry, the library section under pipelines.
0:11:32.500 --> 0:11:42.560
Jeffrey Gruttadauria
We copy the container controller parameters and the IDMS file query parameters up to six a BLOB storage.
0:11:43.820 --> 0:11:52.800
Jeffrey Gruttadauria
And we build and push a Docker image registry for the for the container itself.
0:11:56.410 --> 0:12:0.710
Jeffrey Gruttadauria
And just for what some of those things look like.
0:12:1.870 --> 0:12:3.960
Jeffrey Gruttadauria
The IDMS file query.
0:12:5.390 --> 0:12:18.750
Jeffrey Gruttadauria
There's two of them, the one for DBA BJ or product information just grabs a few pieces of information for each product, namely the item number, the DCC.
0:12:19.350 --> 0:12:22.510
Jeffrey Gruttadauria
And the usage code and a description of the item.
0:12:24.200 --> 0:12:26.630
Jeffrey Gruttadauria
And the DB AJA.
0:12:27.480 --> 0:12:36.960
Jeffrey Gruttadauria
Uh file dump for getting BVR information pulls BBR numbers deal and deal end date for.
0:12:37.810 --> 0:12:44.50
Jeffrey Gruttadauria
For only the DBA BJ records where W retail term codes is not empty.
0:12:46.210 --> 0:12:59.780
Jeffrey Gruttadauria
And container controller just looks like the standard one with storage connections, strings, container names, et cetera. That'll get filled in as part of setting the app secrets.
0:13:3.370 --> 0:13:4.90
Jeffrey Gruttadauria
Uh is.
0:13:3.750 --> 0:13:4.100
Vishnu S
Jeff.
0:13:4.770 --> 0:13:5.240
Jeffrey Gruttadauria
Oh Yep.
0:13:6.20 --> 0:13:7.790
Vishnu S
Now can you go back to the previous call?
0:13:9.190 --> 0:13:9.660
Jeffrey Gruttadauria
This one.
0:13:10.270 --> 0:13:10.670
Vishnu S
Yes.
0:13:11.710 --> 0:13:22.890
Vishnu S
I don't know query definitions, you just showed that I Jason file right? That storage account details how we pitch, how it is mapped with the proper storage account.
0:13:24.0 --> 0:13:28.70
Vishnu S
Under uh WR Spice 79, get DB.
0:13:30.320 --> 0:13:30.690
Jeffrey Gruttadauria
So.
0:13:29.970 --> 0:13:34.480
Vishnu S
Dot Jason file? No, not that one under ID Ms. file query.
0:13:35.430 --> 0:13:35.890
Jeffrey Gruttadauria
Alright.
0:13:35.620 --> 0:13:37.380
Vishnu S
Put it admissions. Yes, that's only.
0:13:39.30 --> 0:13:39.660
Jeffrey Gruttadauria
So.
0:13:39.200 --> 0:13:39.740
Vishnu S
Yeah.
0:13:40.880 --> 0:13:43.50
Jeffrey Gruttadauria
So IMS file query.
0:13:44.90 --> 0:13:50.680
Jeffrey Gruttadauria
We'll only will only be running it on either test MF bat or one or.
0:13:51.240 --> 0:13:56.570
Jeffrey Gruttadauria
Uh. Wfm effect 01 and those are configured to send to.
0:13:57.420 --> 0:13:57.890
Jeffrey Gruttadauria
Umm.
0:13:59.160 --> 0:14:2.790
Jeffrey Gruttadauria
The past or the test slash Dev.
0:14:3.490 --> 0:14:8.300
Jeffrey Gruttadauria
Or the production account storage account respectively.
0:14:18.130 --> 0:14:18.510
Jeffrey Gruttadauria
Mm-hmm.
0:14:9.400 --> 0:14:31.600
Vishnu S
Yeah, in output Param section next to the format we just mentioned, the storage account name parameter right that maps should W retail and the text is not clear to me. I hope it's a W retail. So how it is mapping with the actual storage account like this configuration is for the BLOB storage right?
0:14:32.750 --> 0:14:40.40
Jeffrey Gruttadauria
Umm so there there is there's a way to do it. I don't know if we've gone over sipka yet.
0:14:41.360 --> 0:14:41.600
Vishnu S
OK.
0:14:42.260 --> 0:14:52.40
Jeffrey Gruttadauria
To Patrick, do do we need to get a thing for that on the books or do you want me to go over it as part of this meeting?
0:14:52.330 --> 0:14:57.590
Patrick Valasek
Cefco was not one of the core applications that we've reviewed.
0:14:59.0 --> 0:15:2.30
Patrick Valasek
I would say we have the time. Might as well get into it now.
0:15:3.140 --> 0:15:3.680
Jeffrey Gruttadauria
OK.
0:15:4.330 --> 0:15:8.940
Jeffrey Gruttadauria
So basically what this field maps to?
0:15:9.950 --> 0:15:12.140
Jeffrey Gruttadauria
In Sitka is.
0:15:14.40 --> 0:15:16.270
Jeffrey Gruttadauria
Let me open it up real quick.
0:15:29.640 --> 0:15:35.670
Jeffrey Gruttadauria
O ifka is our generic configuration storage account.
0:15:36.860 --> 0:15:37.360
Jeffrey Gruttadauria
On.
0:15:38.360 --> 0:15:47.990
Jeffrey Gruttadauria
And it contains configuration files for AFR container controller and IDMS file query as well as health check apparently.
0:15:50.330 --> 0:15:58.760
Jeffrey Gruttadauria
So in under ID Ms. there is this storage account data file and it has.
0:16:0.180 --> 0:16:4.700
Jeffrey Gruttadauria
It's it's a Jason file that contains a mapping of.
0:16:5.870 --> 0:16:10.630
Jeffrey Gruttadauria
Names to connection strings and BLOB container names, so.
0:16:13.120 --> 0:16:26.350
Jeffrey Gruttadauria
For production that when when we use this this file with IMS file query it it sees that we wanna look up the W retail storage account.
0:16:27.100 --> 0:16:40.380
Jeffrey Gruttadauria
And so it looks in this file, the storage account data Jason finds W retail and grabs the connection string from there and the BLOB container name.
0:16:42.90 --> 0:16:42.360
Vishnu S
Yeah.
0:16:41.590 --> 0:16:44.980
Jeffrey Gruttadauria
And that's where the output Files Go.
0:16:46.180 --> 0:16:47.330
Vishnu S
OK, got it. Thanks.
0:16:48.190 --> 0:16:48.430
Jeffrey Gruttadauria
Umm.
0:16:51.190 --> 0:16:52.820
Jeffrey Gruttadauria
Uh, let's see.
0:16:54.590 --> 0:16:59.360
Jeffrey Gruttadauria
W Retail RG Prod is where files will.
0:17:0.370 --> 0:17:2.860
Jeffrey Gruttadauria
The the Azure resources will go.
0:17:4.30 --> 0:17:19.20
Jeffrey Gruttadauria
And as you can see it in here, it only really shows once. This loads a storage account and an application insights instance. There's also the container app.
0:17:20.550 --> 0:17:28.60
Jeffrey Gruttadauria
Yeah, the container instance that gets deployed, but that goes under a different storage account, I'm pretty sure.
0:17:31.970 --> 0:17:32.550
Jeffrey Gruttadauria
Umm.
0:17:33.430 --> 0:17:35.160
Jeffrey Gruttadauria
As far as.
0:17:36.50 --> 0:17:45.350
Jeffrey Gruttadauria
The the applications by job name wiki where the the section for this is at the very bottom of the list.
0:17:46.320 --> 0:17:49.690
Jeffrey Gruttadauria
And it's in production, it runs daily.
0:17:50.500 --> 0:17:59.720
Jeffrey Gruttadauria
Umm. At about 5:45 PM and then 7:30 for the fall. The job that follows WRS 579.
0:18:0.890 --> 0:18:3.350
Jeffrey Gruttadauria
Umm. And it's a container job.
0:18:4.900 --> 0:18:8.620
Jeffrey Gruttadauria
As for the future, well, the current state itself.
0:18:9.550 --> 0:18:19.680
Jeffrey Gruttadauria
This is what it looks like. Pretty simple. The wars 579 job handles the performing the IDMS queries.
0:18:20.890 --> 0:18:29.70
Jeffrey Gruttadauria
This just sort of goes over what we look for in DBA BJ and DBA JA and where the files get placed.
0:18:30.290 --> 0:18:30.630
Jeffrey Gruttadauria
Umm.
0:18:32.30 --> 0:18:33.220
Jeffrey Gruttadauria
Has. Oops.
0:18:35.160 --> 0:18:36.250
Jeffrey Gruttadauria
As for.
0:18:37.70 --> 0:18:39.400
Jeffrey Gruttadauria
I think I just closed it. Hold on.
0:18:43.410 --> 0:18:44.0
Jeffrey Gruttadauria
There we go.
0:18:44.950 --> 0:18:50.680
Jeffrey Gruttadauria
As for WRS 580, like I mentioned, it's a container controller job.
0:18:52.110 --> 0:18:54.400
Jeffrey Gruttadauria
And this just shows where it outputs.
0:18:55.40 --> 0:18:55.230
Jeffrey Gruttadauria
That.
0:18:56.170 --> 0:19:14.100
Jeffrey Gruttadauria
Basically what it does is it loads in a list of BBR that have W retail terms, looks up product and loads in the product information for any products that belong to these VR's and as part of this we generate a list of unique product groups.
0:19:15.240 --> 0:19:20.320
Jeffrey Gruttadauria
We generate records using the products in each of the unique product groups.
0:19:21.230 --> 0:19:21.590
Jeffrey Gruttadauria
On.
0:19:22.630 --> 0:19:28.330
Jeffrey Gruttadauria
Like I said, if the products associated with the BBR then we send it to.
0:19:29.50 --> 0:19:34.320
Jeffrey Gruttadauria
We said we write it out to one file, if it's not, we write it out to the other file.
0:19:35.60 --> 0:19:39.730
Jeffrey Gruttadauria
And then we write out these generated records and upload them to BLOB storage.
0:19:41.820 --> 0:19:49.280
Jeffrey Gruttadauria
And then there's this WRS 520 job that's owned by EBS 2. This takes the output.
0:19:50.60 --> 0:19:58.580
Jeffrey Gruttadauria
Of our job and does something with it. I don't know, Dave. Dave. Off. Can you speak anymore to that?
0:20:0.560 --> 0:20:1.830
Dave Faucher
No, I can't.
0:20:2.370 --> 0:20:2.840
Jeffrey Gruttadauria
OK.
0:20:3.860 --> 0:20:9.150
Jeffrey Gruttadauria
Well, all all you need to know is they're the ones who ingest it and do stuff with it.
0:20:11.380 --> 0:20:12.290
Jeffrey Gruttadauria
Let's see.
0:20:13.610 --> 0:20:14.660
Jeffrey Gruttadauria
What's next?
0:20:15.610 --> 0:20:19.770
Jeffrey Gruttadauria
Uh as ohh we've got the KBA's.
0:20:21.200 --> 0:20:24.860
Jeffrey Gruttadauria
So wars 579 is the container controller job.
0:20:26.510 --> 0:20:33.40
Jeffrey Gruttadauria
So we we ohh no, it's the items file query job. Sorry so we run.
0:20:34.70 --> 0:20:37.800
Jeffrey Gruttadauria
Now this is out of date. I believe this should be updated to.
0:20:39.530 --> 0:20:45.540
Jeffrey Gruttadauria
To say that we run a TPS plan, so I'll I'll have to modify that after this meeting.
0:20:46.320 --> 0:20:55.260
Jeffrey Gruttadauria
But in general, this is where we will denote that the TPS plan is being run, which runs the items file query with.
0:20:56.120 --> 0:20:59.710
Jeffrey Gruttadauria
Uh WRS 579. Get dba AJA.
0:21:0.780 --> 0:21:6.120
Jeffrey Gruttadauria
And WRS 579 get DBA BJ.
0:21:7.150 --> 0:21:7.550
Jeffrey Gruttadauria
Umm.
0:21:8.800 --> 0:21:14.270
Jeffrey Gruttadauria
In both cases, the files are saved in a CSV format and that's how.
0:21:15.820 --> 0:21:16.650
Jeffrey Gruttadauria
That's how.
0:21:17.430 --> 0:21:22.980
Jeffrey Gruttadauria
We expect to read the information into the database in wars 580.
0:21:29.220 --> 0:21:40.270
Jeffrey Gruttadauria
Yeah. And like you said, runs Mondays through Sundays at 4:54 PM. Sorry, five 5445 PM.
0:21:41.510 --> 0:21:49.130
Jeffrey Gruttadauria
And the priority is set to leave is. Is that valid? Dave Patrick.
0:21:51.750 --> 0:21:52.160
Jeffrey Gruttadauria
I would.
0:21:51.320 --> 0:21:52.700
Patrick Valasek
It's not our job, I'm not sure.
0:21:55.450 --> 0:21:55.750
Patrick Valasek
Ohh.
0:21:55.190 --> 0:21:56.300
Dave Faucher
Yeah, this.
0:22:0.190 --> 0:22:1.110
Dave Faucher
I believe it is.
0:21:59.740 --> 0:22:1.740
Jason Long
And why does it still reference Team 2?
0:22:2.570 --> 0:22:2.860
Patrick Valasek
Yeah.
0:22:4.420 --> 0:22:5.240
Jason Long
We got to fix that.
0:22:8.20 --> 0:22:8.360
Dave Faucher
Ah.
0:22:6.270 --> 0:22:8.500
Jason Long
You're going the wrong version. Ah.
0:22:3.570 --> 0:22:9.750
Jeffrey Gruttadauria
Yeah. Did I? Ohh, I'm looking at an older version. OK, that's why.
0:22:10.570 --> 0:22:11.360
Jeff Bloom
That'll do it.
0:22:10.440 --> 0:22:11.570
Patrick Valasek
Living in the past, Jeff.
0:22:12.710 --> 0:22:18.250
Jeffrey Gruttadauria
OK, so it's so it's set to immediate, which is what we expected and it.
0:22:18.930 --> 0:22:21.640
Jeffrey Gruttadauria
It references the TPS plan.
0:22:22.420 --> 0:22:23.0
Jeffrey Gruttadauria
That.
0:22:24.730 --> 0:22:28.900
Jeffrey Gruttadauria
That we're running to download all this information. OK, that makes more sense.
0:22:34.570 --> 0:22:37.530
Jeffrey Gruttadauria
As for wars 580.
0:22:38.800 --> 0:22:45.990
Jeffrey Gruttadauria
Umm, same thing. It's immediate. It runs daily only this one runs at 7:30 PM.
0:22:48.190 --> 0:22:52.590
Jeffrey Gruttadauria
Tom, it's a container controller app, so it goes through.
0:22:53.670 --> 0:22:58.370
Jeffrey Gruttadauria
What processing is involved in the W retail item SCAN?
0:23:1.820 --> 0:23:2.110
Jeffrey Gruttadauria
Ah.
0:23:2.880 --> 0:23:5.180
Jeffrey Gruttadauria
What what parameters get passed in?
0:23:6.60 --> 0:23:12.410
Jeffrey Gruttadauria
Worse, 580. So we know which container to use and skip upload since there's no.
0:23:14.140 --> 0:23:27.380
Jeffrey Gruttadauria
Since there's no need to move input files around the previous job, WRS 579 will put the files directly in the input folders in BLOB storage.
0:23:30.280 --> 0:23:31.920
Jeffrey Gruttadauria
And then it notes that.
0:23:33.590 --> 0:23:39.860
Jeffrey Gruttadauria
It notes that it's triggered by 579 and it triggers 520.
0:23:44.920 --> 0:23:48.410
Jeffrey Gruttadauria
Umm. Anything else on the KB's before I move on?
0:23:54.240 --> 0:23:54.590
Jeffrey Gruttadauria
OK.
0:23:56.370 --> 0:24:1.760
Jeffrey Gruttadauria
Then what's remaining are some examples of typical incidents.
0:24:3.210 --> 0:24:8.950
Jeffrey Gruttadauria
The first example we have here is a transient error with the IDMS file query.
0:24:9.810 --> 0:24:10.330
Jeffrey Gruttadauria
So.
0:24:11.250 --> 0:24:12.710
Jeffrey Gruttadauria
This is sort of.
0:24:13.940 --> 0:24:15.180
Jeffrey Gruttadauria
What this will look like?
0:24:15.890 --> 0:24:38.980
Jeffrey Gruttadauria
This is a case where there's initially a problem with wars with yeah WS 579 usually either due to a hiccup in the networking or the Wegmans mainframe being inaccessible for whatever reason. This kind in particular, sometimes we'll.
0:24:39.920 --> 0:24:50.350
Jeffrey Gruttadauria
We'll have OPS rerun it automatically or or manually, and it'll work on the on the retry, in which case we never get paged.
0:24:51.700 --> 0:24:56.670
Jeffrey Gruttadauria
Uh, three such tickets, including this one, were created within the last year.
0:24:58.470 --> 0:24:59.760
Jeffrey Gruttadauria
Uh, this next one.
0:25:0.500 --> 0:25:5.10
Jeffrey Gruttadauria
Is ID Ms. file query getting stuck in execution.
0:25:6.450 --> 0:25:15.460
Jeffrey Gruttadauria
This only happened once this year and what we did is we had OPS force complete the job and rerun it and the rerun succeeded.
0:25:18.170 --> 0:25:21.590
Jeffrey Gruttadauria
So this is just sort of generally what this looks like.
0:25:22.460 --> 0:25:25.940
Jeffrey Gruttadauria
We created a task, assigned it to OPS.
0:25:26.660 --> 0:25:30.520
Jeffrey Gruttadauria
And you know, they stopped and restarted the job for us.
0:25:37.940 --> 0:25:38.490
Jeffrey Gruttadauria
Next.
0:25:37.960 --> 0:25:42.350
Vishnu S
Jeff, the stop and restart operation performed in controller controller problem right.
0:25:43.80 --> 0:25:45.700
Jeffrey Gruttadauria
Yep. That's why we had to have OPS do it.
0:25:46.190 --> 0:25:46.630
Vishnu S
OK.
0:25:49.710 --> 0:25:50.870
Vishnu S
And in the food.
0:25:51.910 --> 0:26:3.480
Vishnu S
And but for the section you are mentioning item this query tool when it when it was promoted rerun after updating the ID must file query and it succeeded. How? How are you doing that?
0:26:4.900 --> 0:26:6.360
Jeffrey Gruttadauria
I'm sorry, could you say that again?
0:26:7.640 --> 0:26:8.950
Vishnu S
In the 14th student.
0:26:10.660 --> 0:26:14.590
Vishnu S
The resolution was mentioned read and after updating idea was file query.
0:26:17.430 --> 0:26:18.980
Vishnu S
In the current screen which you are showing.
0:26:19.430 --> 0:26:20.960
Jeffrey Gruttadauria
Oh, the current state, sorry.
0:26:23.150 --> 0:26:24.820
Vishnu S
No, no, no. Go back to the previous screen.
0:26:25.380 --> 0:26:25.720
Jeffrey Gruttadauria
Ohh.
0:26:26.610 --> 0:26:30.60
Vishnu S
In the documentation section, uh WRS, 579.
0:26:30.620 --> 0:26:32.330
Vishnu S
Uh, #4.
0:26:33.730 --> 0:26:35.720
Vishnu S
The incident number 1171.
0:26:36.650 --> 0:26:36.970
Vishnu S
Yep.
0:26:37.710 --> 0:26:38.200
Jeffrey Gruttadauria
OK.
0:26:39.620 --> 0:26:44.140
Vishnu S
In this step it was mentioned Rena and after updating ID must file for Ray and it succeeded.
0:26:45.300 --> 0:26:49.700
Vishnu S
I know how it is, how we are, how are we updating the ID must file for you.
0:26:50.680 --> 0:26:56.550
Jeffrey Gruttadauria
O IDMS file query has its own pipeline so.
0:26:57.360 --> 0:26:59.870
Jeffrey Gruttadauria
Here. I'll. I'll go to that real quick.
0:27:4.740 --> 0:27:9.810
Jeff Bloom
That's one of the core apps that we went over in the initial set of meetings.
0:27:10.960 --> 0:27:14.430
Jeffrey Gruttadauria
Did did you go over the pipeline in that meeting cause?
0:27:15.510 --> 0:27:15.790
Jeffrey Gruttadauria
If.
0:27:16.650 --> 0:27:17.970
Jeff Bloom
I don't remember who presented it.
0:27:18.530 --> 0:27:18.980
Jeffrey Gruttadauria
OK.
0:27:18.570 --> 0:27:20.950
Mike Zuber
I think it was. It was me. And yeah we did.
0:27:21.680 --> 0:27:22.60
Mike Zuber
But.
0:27:21.430 --> 0:27:22.400
Jeffrey Gruttadauria
OK so.
0:27:22.750 --> 0:27:25.400
Mike Zuber
Doesn't hurt the green recover.
0:27:25.890 --> 0:27:26.220
Jeffrey Gruttadauria
OK.
0:27:28.380 --> 0:27:32.720
Jeffrey Gruttadauria
But yeah, so there's this IDMS file query CI.
0:27:33.760 --> 0:27:39.900
Jeffrey Gruttadauria
Pipeline, which builds stuff from the IDMS file query repository.
0:27:40.990 --> 0:27:45.680
Jeffrey Gruttadauria
This only really gets run whenever we need to push something so.
0:27:47.110 --> 0:27:47.530
Jeffrey Gruttadauria
Uh.
0:27:48.320 --> 0:27:49.710
Jeffrey Gruttadauria
And this is what it looks like.
0:27:50.880 --> 0:28:3.950
Jeffrey Gruttadauria
Each environment we have a release section and a published configuration section, so the release pushes the tool itself to.
0:28:5.250 --> 0:28:6.70
Jeffrey Gruttadauria
To.
0:28:8.610 --> 0:28:12.480
Jeffrey Gruttadauria
Wfm about 01 or MF bat 01.
0:28:11.710 --> 0:28:14.830
Jeff Bloom
Psst, psst. I'm at that on.
0:28:15.350 --> 0:28:20.620
Jeffrey Gruttadauria
Yeah, well yeah, TST cert and and WFM.
0:28:21.750 --> 0:28:22.320
Jeffrey Gruttadauria
On.
0:28:23.730 --> 0:28:32.110
Jeffrey Gruttadauria
And it also deploys the Azure resources, the config section of the config section just deploys.
0:28:33.360 --> 0:28:39.280
Jeffrey Gruttadauria
The pricing app specific configuration file to sipka.
0:28:43.280 --> 0:28:43.660
Jeffrey Gruttadauria
But.
0:28:43.180 --> 0:28:43.670
Vishnu S
OK.
0:28:44.760 --> 0:28:45.10
Jeffrey Gruttadauria
Yeah.
0:28:47.720 --> 0:28:48.0
Jeffrey Gruttadauria
Yeah.
0:28:48.760 --> 0:28:54.100
Jeffrey Gruttadauria
Uh, so. So this third one is a transient control M issue.
0:28:54.950 --> 0:28:57.850
Jeffrey Gruttadauria
Umm. Effectively there weren't any logs.
0:28:58.560 --> 0:29:6.560
Jeffrey Gruttadauria
Denoting that it that we attempted to run it, so we had it rerun which succeeded. This also only happened once.
0:29:7.630 --> 0:29:9.0
Jeffrey Gruttadauria
Within the past year.
0:29:11.0 --> 0:29:11.380
Jeffrey Gruttadauria
So.
0:29:13.460 --> 0:29:21.770
Jeffrey Gruttadauria
So yeah, it looks like we just created a task to have WRS 579 restarted and it succeeded on that.
0:29:22.950 --> 0:29:25.420
Jeffrey Gruttadauria
On that uh. Rerun.
0:29:28.690 --> 0:29:38.980
Jeffrey Gruttadauria
And lastly, the one we were just talking about there, there was a configuration issue with IDMS file query when it was promoted so we.
0:29:39.840 --> 0:29:40.260
Jeffrey Gruttadauria
We.
0:29:41.140 --> 0:29:53.850
Jeffrey Gruttadauria
We pushed another version of it with the issue fixed and have the job rerun and it succeeded on that. Rerun. This also only happened once in the past year.
0:30:0.590 --> 0:30:5.340
Jeffrey Gruttadauria
Yeah, the issue here was some of the paths we were.
0:30:6.370 --> 0:30:13.780
Jeffrey Gruttadauria
We were using were relative instead of absolute and something in IDMS file query didn't like that so.
0:30:14.930 --> 0:30:18.50
Jeffrey Gruttadauria
So we updated the app config for it to.
0:30:19.140 --> 0:30:21.350
Jeffrey Gruttadauria
To use absolute paths and it worked just fine.
0:30:22.770 --> 0:30:26.90
Jeffrey Gruttadauria
And yeah, like like you see here, another task for.
0:30:26.760 --> 0:30:28.30
Jeffrey Gruttadauria
Uh, restarting.
0:30:29.120 --> 0:30:30.630
Jeffrey Gruttadauria
Wars 579.
0:30:34.870 --> 0:30:39.220
Jeffrey Gruttadauria
As far as WS580 goes.
0:30:40.320 --> 0:30:40.760
Jeffrey Gruttadauria
Umm.
0:30:42.100 --> 0:30:46.480
Jeffrey Gruttadauria
We've only really had one bug within the past year.
0:30:47.140 --> 0:30:57.530
Jeffrey Gruttadauria
On and it it was a bug in the release pipeline for container controller that emitted a configuration configuration parameter that was needed.
0:30:58.220 --> 0:31:6.300
Jeffrey Gruttadauria
Umm, we we had redeployed container controller same sort of way we would report redeploy items file query.
0:31:7.30 --> 0:31:10.250
Jeffrey Gruttadauria
Uh, and then it reran after that.
0:31:11.570 --> 0:31:14.360
Jeffrey Gruttadauria
This only happened once this year.
0:31:19.170 --> 0:31:20.260
Jeffrey Gruttadauria
Yeah, and like.
0:31:21.670 --> 0:31:26.210
Jeffrey Gruttadauria
Like with the other ones, there's just a task here for restarting.
0:31:27.270 --> 0:31:31.460
Jeffrey Gruttadauria
Wars 580 and allowing it successors to continue.
0:31:35.170 --> 0:31:37.680
Jeffrey Gruttadauria
Any questions about the W retail stuff?
0:31:42.920 --> 0:31:43.350
Vishnu S
No.
0:31:44.600 --> 0:31:45.190
Jeffrey Gruttadauria
OK.
0:31:46.520 --> 0:31:47.190
Jeffrey Gruttadauria
Then.
0:31:48.650 --> 0:31:52.140
Jeffrey Gruttadauria
We will jump into point of sale.
0:31:53.150 --> 0:32:13.570
Jeffrey Gruttadauria
Uh, there's two different sections for point of Sale, Daily Cafe sales and price aggregation. I'll be they'll, they'll share some of the same resources, so I'll only go over the pipeline, the Azure resources and the.
0:32:14.970 --> 0:32:16.500
Jeffrey Gruttadauria
App by Job Wiki once.
0:32:17.710 --> 0:32:23.780
Jeffrey Gruttadauria
Can current state diagram I'll probably go over twice just cause it's sort of.
0:32:24.640 --> 0:32:26.210
Jeffrey Gruttadauria
Parts of it are neatly.
0:32:27.340 --> 0:32:27.730
Jeffrey Gruttadauria
Uh.
0:32:28.420 --> 0:32:29.190
Jeffrey Gruttadauria
Partitioned.
0:32:29.940 --> 0:32:30.400
Jeffrey Gruttadauria
So.
0:32:31.410 --> 0:32:34.980
Jeffrey Gruttadauria
Yeah, you'll see what I mean when when we start going through it, so.
0:32:36.110 --> 0:32:38.710
Jeffrey Gruttadauria
Starting with Daily cafe sales.
0:32:40.50 --> 0:32:45.400
Jeffrey Gruttadauria
Umm this application reads in Market Cafe Records provided to us.
0:32:47.190 --> 0:32:47.720
Jeffrey Gruttadauria
From.
0:32:48.640 --> 0:32:49.850
Jeffrey Gruttadauria
From a different team.
0:32:50.550 --> 0:33:2.510
Jeffrey Gruttadauria
And it performs the following steps. It groups each of the the CAFE records by the transaction they belong to, and for each transaction we create an account record.
0:33:3.440 --> 0:33:11.210
Jeffrey Gruttadauria
Representing the transaction, we convert the item coupon tender and tax records into.
0:33:12.240 --> 0:33:25.390
Jeffrey Gruttadauria
A format that the down one of the downstream processes expects and we calculate the total sales for the transaction and add the total sales to.
0:33:26.250 --> 0:33:27.400
Jeffrey Gruttadauria
To a list of.
0:33:28.180 --> 0:33:31.730
Jeffrey Gruttadauria
Sales in a party in the store that the transaction.
0:33:32.480 --> 0:33:34.220
Jeffrey Gruttadauria
Was was a part of.
0:33:35.640 --> 0:33:42.150
Jeffrey Gruttadauria
Then it writes the records out each type of record, getting its own file type.
0:33:43.510 --> 0:33:48.410
Jeffrey Gruttadauria
Uh, and then we write the sales totals for each store out to disca.
0:33:49.400 --> 0:33:49.810
Jeffrey Gruttadauria
Umm.
0:33:50.610 --> 0:34:5.480
Jeffrey Gruttadauria
And then we just delete the input files. So the note here is that the original mainframe program would output the results in a single file in a fixed block type file.
0:34:8.360 --> 0:34:13.720
Jeffrey Gruttadauria
We are generating multiple files due to how our record writing logic works.
0:34:14.370 --> 0:34:25.540
Jeffrey Gruttadauria
On and to simplify movement of the results back to the mainframe, since they can be sorted together quicker on the mainframe than they could be, you know on the.
0:34:26.430 --> 0:34:28.760
Jeffrey Gruttadauria
On the server that this runs off of.
0:34:31.610 --> 0:34:32.240
Jeffrey Gruttadauria
Umm.
0:34:33.790 --> 0:34:35.800
Jeffrey Gruttadauria
As for the pipeline.
0:34:36.520 --> 0:34:39.760
Jeffrey Gruttadauria
We this gets deployed as part of the point of sale.
0:34:40.490 --> 0:34:42.840
Jeffrey Gruttadauria
Tenuous integration pipeline.
0:34:43.910 --> 0:34:46.790
Jeffrey Gruttadauria
This looks similar to the W retail one.
0:34:47.700 --> 0:34:54.590
Jeffrey Gruttadauria
On with a build step and several release steps and BDD test step.
0:34:56.10 --> 0:34:59.480
Jeffrey Gruttadauria
If we look in here, we have.
0:35:0.170 --> 0:35:3.120
Jeffrey Gruttadauria
Steps for deploying the Azure resources.
0:35:4.790 --> 0:35:5.910
Jeffrey Gruttadauria
Right about here.
0:35:6.860 --> 0:35:7.340
Jeffrey Gruttadauria
Umm.
0:35:8.740 --> 0:35:13.370
Jeffrey Gruttadauria
We have steps for adding secrets to the.
0:35:14.730 --> 0:35:17.630
Jeffrey Gruttadauria
Do the different configuration files for.
0:35:18.450 --> 0:35:21.490
Jeffrey Gruttadauria
PRC 506 and PRC 579.
0:35:22.590 --> 0:35:30.820
Jeffrey Gruttadauria
We have steps for building and deploying the Docker images for the for the containers for them.
0:35:32.190 --> 0:35:32.590
Jeffrey Gruttadauria
Umm.
0:35:34.290 --> 0:35:36.390
Jeffrey Gruttadauria
Yeah. And just copying.
0:35:37.620 --> 0:35:40.350
Jeffrey Gruttadauria
Copying resources up to Sitka.
0:35:44.350 --> 0:35:45.710
Jeffrey Gruttadauria
So what's next?
0:35:46.390 --> 0:35:47.990
Jeffrey Gruttadauria
Apps by job wiki.
0:35:50.770 --> 0:35:51.240
Jeffrey Gruttadauria
So.
0:35:52.60 --> 0:35:56.480
Jeffrey Gruttadauria
So the Daily Cafe sales is this line here.
0:35:57.80 --> 0:36:1.390
Jeffrey Gruttadauria
As you can see, it runs daily at 1:00 AM and it's a.
0:36:2.150 --> 0:36:5.160
Jeffrey Gruttadauria
It's a .net core container app.
0:36:9.190 --> 0:36:11.490
Jeffrey Gruttadauria
For the current state.
0:36:12.170 --> 0:36:16.290
Jeffrey Gruttadauria
This is what it looks like. This top section here.
0:36:17.20 --> 0:36:19.430
Jeffrey Gruttadauria
Is is the Daily cafe sales?
0:36:21.70 --> 0:36:29.790
Jeffrey Gruttadauria
We get kicked off by this C AF506 job which which will give us.
0:36:30.510 --> 0:36:43.310
Jeffrey Gruttadauria
One or more files in the format of WO mainframe Dash star where that star will be. The will be a representation of the date.
0:36:45.20 --> 0:36:50.670
Jeffrey Gruttadauria
So we ingest that file or this.
0:36:51.910 --> 0:36:54.620
Jeffrey Gruttadauria
This job has a TPS plan that will.
0:36:55.370 --> 0:37:1.340
Jeffrey Gruttadauria
Move those files over to the input directory for PRC 506.
0:37:2.540 --> 0:37:9.480
Jeffrey Gruttadauria
And so RC 506 will kick off the processor that will run in a container.
0:37:10.760 --> 0:37:22.940
Jeffrey Gruttadauria
On it'll also, in addition to generating files that will also check for an empty file, and if we did get an empty file, we'll e-mail the proper.
0:37:24.50 --> 0:37:24.880
Jeffrey Gruttadauria
Recipients.
0:37:26.520 --> 0:37:27.550
Jeffrey Gruttadauria
And like you said.
0:37:28.310 --> 0:37:28.730
Jeffrey Gruttadauria
Uh.
0:37:29.590 --> 0:37:41.120
Jeffrey Gruttadauria
Total Cafe sales go into the difficult database under the Daily Cafe sales table and there is a COGNOS report that gets generated from that table.
0:37:43.640 --> 0:37:53.820
Jeffrey Gruttadauria
Once the container app is done, we have a TPS plan that is PRC 507, which moves the output files up to the mainframe.
0:37:54.760 --> 0:37:56.130
Jeffrey Gruttadauria
And then.
0:37:57.120 --> 0:37:59.530
Jeffrey Gruttadauria
There is a job on the mainframe called.
0:38:0.760 --> 0:38:6.0
Jeffrey Gruttadauria
577B which will take the results of of this.
0:38:6.960 --> 0:38:8.610
Jeffrey Gruttadauria
File as well as.
0:38:9.480 --> 0:38:12.440
Jeffrey Gruttadauria
A couple different other jobs and.
0:38:14.860 --> 0:38:17.210
Jeffrey Gruttadauria
And process the coupon records.
0:38:18.440 --> 0:38:32.700
Jeffrey Gruttadauria
It will also the data will also be used in this P-779-B job which takes the results of this job. PSM 7 and PSP 506.
0:38:33.590 --> 0:38:37.410
Jeffrey Gruttadauria
And or 506 that he S 508.
0:38:38.290 --> 0:38:38.870
Jeffrey Gruttadauria
And.
0:38:39.930 --> 0:38:48.630
Jeffrey Gruttadauria
Converts them into PS780 files or records, and I'll go over that a little bit more in.
0:38:49.650 --> 0:38:50.20
Jeffrey Gruttadauria
In.
0:38:50.810 --> 0:38:51.410
Jeffrey Gruttadauria
In a bit.
0:38:52.960 --> 0:38:53.490
Jeffrey Gruttadauria
But.
0:38:55.920 --> 0:39:0.170
Jeffrey Gruttadauria
As far as the Kabas go, PRC 506.
0:39:0.870 --> 0:39:17.980
Jeffrey Gruttadauria
Looks similar to most of the container controller jobs. It's immediate, it's it runs daily it we note that it runs upon completion of CAAF 506, which is typically about 1:00 AM.
0:39:20.280 --> 0:39:20.610
Jeffrey Gruttadauria
Umm.
0:39:23.910 --> 0:39:27.310
Jeffrey Gruttadauria
Yeah, has a little summary of what happens.
0:39:28.450 --> 0:39:29.520
Jeffrey Gruttadauria
In the container.
0:39:31.860 --> 0:39:33.760
Jeffrey Gruttadauria
Where stuff gets written out too.
0:39:36.250 --> 0:39:45.830
Jeffrey Gruttadauria
Yeah, and here's the like, here's the five different files that it generates, one for account records, one for coupon records, one for item records, tax records.
0:39:46.600 --> 0:39:48.730
Jeffrey Gruttadauria
Records and tender records.
0:39:52.110 --> 0:39:56.460
Jeffrey Gruttadauria
And we note that it it triggers PRC 507.
0:39:57.370 --> 0:40:3.30
Jeffrey Gruttadauria
Maybe a for PRC 507. Also immediate also runs daily.
0:40:3.650 --> 0:40:6.70
Jeffrey Gruttadauria
Upon completion of PRC 506.
0:40:7.650 --> 0:40:8.120
Jeffrey Gruttadauria
Arm.
0:40:9.800 --> 0:40:14.890
Jeffrey Gruttadauria
This moves the account item tender and tax files.
0:40:15.730 --> 0:40:16.360
Jeffrey Gruttadauria
To.
0:40:17.420 --> 0:40:26.890
Jeffrey Gruttadauria
To a particular location that P-779-B will expect them in, and it moves the coupon file generated to.
0:40:27.630 --> 0:40:33.550
Jeffrey Gruttadauria
A to a location that PS77PS577B.
0:40:34.190 --> 0:40:35.350
Jeffrey Gruttadauria
Uh expects it.
0:40:36.170 --> 0:40:42.920
Jeffrey Gruttadauria
And didn't see these are the names of those files on the mainframe or sorry datasets.
0:40:47.970 --> 0:40:52.880
Jeffrey Gruttadauria
Umm. As far as incidents go?
0:40:53.810 --> 0:40:57.530
Jeffrey Gruttadauria
There's really only a few types that get.
0:40:59.520 --> 0:41:23.280
Jeffrey Gruttadauria
That we've seen within the past year, this first one was another job automatically or manually being failing once and OPS either automatically or manually restarts that and the IT it's exceeds on the retry. Thus we never get paged five such tickets.
0:41:24.500 --> 0:41:27.930
Jeffrey Gruttadauria
Occurred this year, including this one.
0:41:29.410 --> 0:41:30.340
Jeffrey Gruttadauria
Yeah. As you can see.
0:41:31.210 --> 0:41:31.910
Jeffrey Gruttadauria
Oops, just.
0:41:32.960 --> 0:41:35.790
Jeffrey Gruttadauria
Says that they've restarted it and it's successful.
0:41:36.650 --> 0:41:39.990
Jeffrey Gruttadauria
Nothing. Nothing for us to do and we're never tagged in it.
0:41:42.940 --> 0:41:47.420
Jeffrey Gruttadauria
The second one is for when the container app runs long.
0:41:48.150 --> 0:41:48.610
Jeffrey Gruttadauria
Uh.
0:41:50.210 --> 0:42:0.420
Jeffrey Gruttadauria
What had happened was that the container had finished processing, but container controller was having downloading or trouble downloading the files.
0:42:1.770 --> 0:42:19.500
Jeffrey Gruttadauria
What we ended up doing was manually downloading the files and placing them in the output directory. Then we had opts force complete the job and move on to the next one. This only happened once within the past year.
0:42:23.510 --> 0:42:30.0
Jeffrey Gruttadauria
And it looks like we didn't create a task for this One South. I'm guessing Jeff, you just talked with OPS directly.
0:42:32.370 --> 0:42:32.980
Jeff Bloom
Most likely.
0:42:34.80 --> 0:42:34.410
Jeffrey Gruttadauria
OK.
0:42:39.510 --> 0:42:40.640
Jeffrey Gruttadauria
The next one.
0:42:41.660 --> 0:42:42.390
Jeffrey Gruttadauria
Was.
0:42:43.480 --> 0:42:53.640
Jeffrey Gruttadauria
Was another container controller issue, but this this was more related to an infrastructure issue with container services in Azure.
0:42:54.630 --> 0:43:6.60
Jeffrey Gruttadauria
We we eventually had OPS rerun the job with the skip upload and skip container flags because the run had completed initially.
0:43:7.440 --> 0:43:13.240
Jeffrey Gruttadauria
On so it it would just download the output files and you know we had.
0:43:14.230 --> 0:43:18.320
Jeffrey Gruttadauria
The success, successor, successor Job run afterwards.
0:43:19.480 --> 0:43:24.520
Jeffrey Gruttadauria
This only happened once this year and it was a couple of days ago.
0:43:25.370 --> 0:43:29.640
Jeffrey Gruttadauria
Uh and yeah, Mike, I I don't know if you could speak more to that.
0:43:30.310 --> 0:43:36.720
Jeffrey Gruttadauria
Uh container services issue that that we were having cause I know you you called them about it.
0:43:37.670 --> 0:43:44.520
Mike Zuber
Yeah. And to create a ticket with Microsoft as an an issue internal to Azure that they had to address.
0:43:46.50 --> 0:44:1.410
Mike Zuber
And once they did, for whatever jobs that we didn't rerun locally, we just had OPS rerun the jobs as normal. And those I think this may have been one of them where it just it reran the container in Azure and reran successfully.
0:44:3.510 --> 0:44:7.450
Mike Zuber
Oh, this one. I did run it just didn't exit cleanly. I'm sorry, OK?
0:44:7.180 --> 0:44:16.480
Jeffrey Gruttadauria
Yeah, but still, I I I'd more or less just wanted to bring attention to the the the issue that you and I were fielding with these so.
0:44:17.0 --> 0:44:17.300
Mike Zuber
Yep.
0:44:18.90 --> 0:44:24.180
Jeffrey Gruttadauria
Yes, it's out of the ordinary. It shouldn't happen, but when it does, call Microsoft.
0:44:24.830 --> 0:44:35.170
Patrick Valasek
And a quick question on that, Mike, how do you go about opening that ticket or or contacting, you know, whatever external?
0:44:35.910 --> 0:44:40.740
Patrick Valasek
Microsoft Support channel is it just. There's an option through DevOps somewhere correct?
0:44:43.240 --> 0:44:43.940
Patrick Valasek
Azure portal.
0:44:45.360 --> 0:44:45.700
Patrick Valasek
OK.
0:44:41.240 --> 0:44:47.550
Mike Zuber
No, it's through the Azure portal portal.azure.com. Yeah, it's in the upper right of of that page.
0:44:48.690 --> 0:44:50.140
Patrick Valasek
Yeah, and I remember.
0:44:49.310 --> 0:44:50.380
Mike Zuber
Oh, we're about to see.
0:44:51.290 --> 0:44:51.710
Patrick Valasek
There we are.
0:44:51.490 --> 0:44:52.520
Jeffrey Gruttadauria
Feedback I assume.
0:44:56.460 --> 0:44:57.150
Jeff Bloom
Question.
0:44:53.540 --> 0:44:59.370
Mike Zuber
A passing tone now gonna jog my memory to the feedback or? Yeah, they're that.
0:44:59.140 --> 0:44:59.530
Jeff Bloom
Yeah.
0:44:57.980 --> 0:45:0.180
Jeffrey Gruttadauria
Ohh support and troubleshooting.
0:45:0.210 --> 0:45:0.620
Jeff Bloom
Yeah.
0:45:1.470 --> 0:45:6.60
Patrick Valasek
Yeah. So I remember in February when this came up, you know, we were.
0:45:9.840 --> 0:45:10.790
Mike Zuber
Help and support.
0:45:7.130 --> 0:45:28.760
Patrick Valasek
Uh, discussing, hey, this would be something useful to speak with the, you know, the TCS crew about I think we had just that same week begun our first kind of core transition or maybe we were preparing for them. I can't recall regardless you know this is probably a an issue or something similar that Babu Vishnu.
0:45:28.960 --> 0:45:36.940
Patrick Valasek
Umm, Vijay, you guys have experienced in other support contracts that you have. You know when there is a?
0:45:38.400 --> 0:45:39.890
Patrick Valasek
Kind of a more fundamental.
0:45:40.520 --> 0:45:45.620
Patrick Valasek
Umm, uh, infrastructure issue affecting.
0:45:47.200 --> 0:45:50.800
Patrick Valasek
You know, users of the of the Azure services so.
0:45:57.330 --> 0:46:3.550
Patrick Valasek
You guys have experience, uh, reaching out and having those types of discussions and contacts that would imagine, yes.
0:46:6.360 --> 0:46:7.720
N.D. Vijayakumar
Yeah. Yes, Patrick.
0:46:9.660 --> 0:46:10.0
Patrick Valasek
Very good.
0:46:11.570 --> 0:46:12.100
Mike Zuber
The really.
0:46:11.140 --> 0:46:12.410
N.D. Vijayakumar
Maybe one?
0:46:13.590 --> 0:46:18.220
N.D. Vijayakumar
One interesting it it's a contextual thing. Just this, this kind of thing does happen.
0:46:19.800 --> 0:46:33.840
N.D. Vijayakumar
Maybe so does does the Wegmans Infra team come in as an earlier point of contact even before reaching out to Wegmans? Sorry to to Microsoft or.
0:46:35.670 --> 0:46:36.680
N.D. Vijayakumar
Or how is that?
0:46:35.550 --> 0:46:36.840
Mike Zuber
No, it depends.
0:46:40.590 --> 0:46:40.890
N.D. Vijayakumar
Umm.
0:46:38.110 --> 0:46:45.120
Mike Zuber
It depends on the nature of the issue. If it's more of a in an infrastructure like on premises thing.
0:46:45.810 --> 0:46:50.540
Mike Zuber
Uh, it you would escalate through some one of the Wegmans teams?
0:46:51.800 --> 0:47:0.230
Mike Zuber
For example, like Wegmans manages its own firewalls, so you would escalate through. You know that that team there's I think it's called NCS Networking.
0:47:1.610 --> 0:47:1.960
N.D. Vijayakumar
OK.
0:47:1.50 --> 0:47:8.430
Mike Zuber
But in this case we we had determined that it was solely a Microsoft issue, so there was no need to engage a Wegman's team.
0:47:9.430 --> 0:47:9.700
N.D. Vijayakumar
OK.
0:47:10.770 --> 0:47:17.810
Mike Zuber
And just to finish up this this example here, Jeff in the upper left of that main pane, you'll see if you scroll up a little bit.
0:47:19.280 --> 0:47:22.390
Mike Zuber
You'll see a create a support request. That's. That's what we did.
0:47:22.970 --> 0:47:23.490
N.D. Vijayakumar
OK.
0:47:24.930 --> 0:47:25.380
Jeffrey Gruttadauria
Yeah.
0:47:26.450 --> 0:47:27.580
N.D. Vijayakumar
Yeah, I'm just.
0:47:26.590 --> 0:47:30.920
Jeffrey Gruttadauria
I I don't know how far through it I can get without actually having an issue but.
0:47:31.870 --> 0:47:32.820
Jeff Bloom
That's probably fair enough.
0:47:32.50 --> 0:47:53.120
Mike Zuber
You can you can keep going. You can keep going. I don't think there's any need basically at this point. It asks you a series of questions and it will present a series of articles that may help you troubleshoot. And then there's an option to at that point you can click a link and you start a chat session with a Microsoft support Rep who is actually.
0:47:54.770 --> 0:47:59.170
Mike Zuber
I should say, uh, who's knowledge is specific to the area that you're selecting here?
0:48:0.250 --> 0:48:0.470
N.D. Vijayakumar
OK.
0:48:1.400 --> 0:48:2.290
Jeff Bloom
Yeah, there's, there's.
0:48:1.610 --> 0:48:3.30
Patrick Valasek
Mike was the was the.
0:48:1.500 --> 0:48:5.670
N.D. Vijayakumar
Yeah, this is this is not an uncommon just happened.
0:48:5.950 --> 0:48:19.700
N.D. Vijayakumar
Ohh, as I said, only it's the new answers of how one client wants to work with Microsoft before escalating to them also. So that's that's right. Anything that you want to know here. But are you OK with this?
0:48:28.200 --> 0:48:31.610
Vishnu S
It is the first time this support portal.
0:48:33.130 --> 0:48:33.480
Vishnu S
Yeah.
0:48:33.20 --> 0:48:33.600
N.D. Vijayakumar
OK.
0:48:35.590 --> 0:48:37.950
N.D. Vijayakumar
OK. Then we can we can, yeah.
0:48:39.90 --> 0:48:43.90
N.D. Vijayakumar
And this happens with all product windows like whether it is Microsoft, SAP, whatever right now.
0:48:44.190 --> 0:48:44.490
Patrick Valasek
Right.
0:48:45.920 --> 0:48:49.810
Patrick Valasek
But one last question on this I recall seeing.
0:48:52.210 --> 0:49:3.300
Patrick Valasek
E-mail with kind of the acknowledgement of the issue and the resolution from the associative Microsoft who you had dealt with. Do you guys recall if that's linked anywhere in?
0:49:5.60 --> 0:49:8.410
Patrick Valasek
The incident or.
0:49:9.330 --> 0:49:9.890
Patrick Valasek
Umm.
0:49:11.430 --> 0:49:12.890
Patrick Valasek
If not, we may want to.
0:49:13.840 --> 0:49:17.370
Patrick Valasek
Include that just for, you know, kind of the the.
0:49:18.50 --> 0:49:20.110
Patrick Valasek
Capstone on on everything.
0:49:21.170 --> 0:49:21.860
Patrick Valasek
UM.
0:49:23.120 --> 0:49:27.740
Patrick Valasek
Jeff, will you show more in that very top note under resolution if you go to the top there?
0:49:31.620 --> 0:49:36.330
Patrick Valasek
Maybe it was an e-mail exchange with Justin Holbrook.
0:49:37.820 --> 0:49:38.370
Mike Zuber
So.
0:49:39.220 --> 0:49:40.690
Patrick Valasek
Is that what it was, Jeff, OK.
0:49:37.260 --> 0:49:41.140
Jeff Bloom
Yeah, I think we close there was an e-mail, yeah.
0:49:41.470 --> 0:49:48.850
Mike Zuber
It wasn't. Yeah, it wasn't attached to an incident, John Layton, you know, is a supervisor on.
0:49:48.710 --> 0:49:49.60
Patrick Valasek
Mm-hmm.
0:49:58.740 --> 0:49:58.990
Patrick Valasek
OK.
0:49:48.990 --> 0:50:4.400
Mike Zuber
Umm and operations heat asked for a copy of that e-mail, and then Justin Holbrook is an aside was just some it was something he was curious about. OK, I don't think there was any any requirement there was no process requirement to attach that to anything.
0:50:5.760 --> 0:50:6.890
Patrick Valasek
Understood. OK.
0:50:9.630 --> 0:50:13.90
Patrick Valasek
Very good. Thank you. Jeff GI don't mean to have.
0:50:14.980 --> 0:50:16.570
Patrick Valasek
Interrupted your flow here. Thank you.
0:50:17.220 --> 0:50:18.200
Jeffrey Gruttadauria
Yep, no problem.
0:50:20.300 --> 0:50:34.450
Jeffrey Gruttadauria
And then there's only one type of error that we've seen within the past year for PRC 507, and they both it involves, you know, transient issues.
0:50:36.470 --> 0:50:40.400
Jeffrey Gruttadauria
When connecting to the mainframe via the TPS plan.
0:50:41.200 --> 0:50:50.610
Jeffrey Gruttadauria
And which sometimes are related to an upgrade. Sometimes it's just inaccessible. We usually prefer when it's because of an upgrade, because there's.
0:50:51.610 --> 0:50:55.300
Jeffrey Gruttadauria
They they'll usually wait until after.
0:50:57.220 --> 0:51:0.620
Jeffrey Gruttadauria
After the upgrade is done to rerun it but.
0:51:2.320 --> 0:51:5.110
Jeffrey Gruttadauria
So the example we have of this.
0:51:6.90 --> 0:51:13.770
Jeffrey Gruttadauria
Is this one is you can see in here. OPS noted that they briefly lost communication with.
0:51:14.600 --> 0:51:17.450
Jeffrey Gruttadauria
Uh Web Prod PC, which is.
0:51:18.120 --> 0:51:19.920
Jeffrey Gruttadauria
The the production mainframe.
0:51:21.860 --> 0:51:23.420
Jeffrey Gruttadauria
And they noted that.
0:51:24.240 --> 0:51:26.850
Jeffrey Gruttadauria
The manual rerun was successful.
0:51:29.130 --> 0:51:32.110
Jeffrey Gruttadauria
So we never got paid for this one specifically.
0:51:32.840 --> 0:51:42.250
Jeffrey Gruttadauria
But we might get paged if it if if it fails enough times and there isn't a known issue with the.
0:51:43.860 --> 0:51:45.450
Jeffrey Gruttadauria
With the mainframe going on.
0:51:49.760 --> 0:51:55.210
Jeffrey Gruttadauria
That's it for daily cafe sales. Any questions about it before I move on?
0:52:0.560 --> 0:52:3.390
Patrick Valasek
No, just keeping an eye on the clock here, it's, you know.
0:52:4.430 --> 0:52:7.790
Patrick Valasek
Getting close to the top of the hour, but yeah, please Jeff, go right ahead.
0:52:8.720 --> 0:52:9.280
Jeffrey Gruttadauria
OK.
0:52:10.420 --> 0:52:13.110
Jeffrey Gruttadauria
Me. close a couple things, OK.
0:52:14.660 --> 0:52:20.170
Jeffrey Gruttadauria
So price aggregator is a bit simpler than.
0:52:21.490 --> 0:52:26.460
Jeffrey Gruttadauria
Than the Death Daily Cafe sales stuff. So let me pull up.
0:52:27.600 --> 0:52:44.50
Jeffrey Gruttadauria
The the readme. This application effectively looks up the prices, the price information for every single product for the current and following day, and we use it to generate.
0:52:44.910 --> 0:52:50.630
Jeffrey Gruttadauria
On price data records for the mainframe to use in the PS779-B job.
0:52:51.480 --> 0:53:7.210
Jeffrey Gruttadauria
Initially we had we had started down the road of creating a a job to completely replace the PS779-B job, but it was it was taking a long time to run longer than.
0:53:7.960 --> 0:53:10.230
Jeffrey Gruttadauria
Then would have been supported.
0:53:11.80 --> 0:53:20.520
Jeffrey Gruttadauria
Or would have been allowed. So our main because our main push was getting pricing related stuff off of the mainframe?
0:53:21.390 --> 0:53:22.880
Jeffrey Gruttadauria
We opted to just.
0:53:23.750 --> 0:53:33.910
Jeffrey Gruttadauria
Grab all of the price information using the Wegmans API and send it down to the mainframe for the processes to use there.
0:53:35.850 --> 0:53:36.210
Jeffrey Gruttadauria
Umm.
0:53:37.940 --> 0:53:43.20
Jeffrey Gruttadauria
Yeah, and there's just a little little note here sort of explaining that.
0:53:45.100 --> 0:53:45.540
Jeffrey Gruttadauria
On.
0:53:46.240 --> 0:53:56.740
Jeffrey Gruttadauria
As for the apps by job Wiki area, it's right below the The Daily Cafe sales. This runs daily at.
0:53:58.30 --> 0:54:3.800
Jeffrey Gruttadauria
10:00 PM So I think that got changed recently to 8:00 PM I'll have to double check.
0:54:5.470 --> 0:54:5.840
Jeffrey Gruttadauria
On.
0:54:7.660 --> 0:54:11.860
Jeffrey Gruttadauria
And yeah, it's a net core Docker container.
0:54:16.80 --> 0:54:18.200
Jeffrey Gruttadauria
Yeah. As for the KBA's?
0:54:19.810 --> 0:54:21.610
Jeffrey Gruttadauria
PRC 579.
0:54:22.380 --> 0:54:27.990
Jeffrey Gruttadauria
Runs daily. Yeah, I I was right. It did get updated to 8:00 PM. I'll have to update.
0:54:29.10 --> 0:54:30.940
Jeffrey Gruttadauria
The the job name wiki.
0:54:31.880 --> 0:54:37.40
Jeffrey Gruttadauria
So this it is critical that this job starts before midnight.
0:54:37.720 --> 0:54:48.430
Jeffrey Gruttadauria
And that is because if it doesn't start before midnight, it will have the incorrect dates of prices to look for when.
0:54:50.100 --> 0:54:56.790
Jeffrey Gruttadauria
When generating the price records and and so it'll generate the records with the incorrect price dates.
0:54:57.940 --> 0:55:8.100
Jeffrey Gruttadauria
Umm this this runs at 8 and typically only takes. Well, I shouldn't say only. It typically takes about 45 minutes.
0:55:8.930 --> 0:55:9.620
Jeffrey Gruttadauria
To run.
0:55:10.600 --> 0:55:16.840
Jeffrey Gruttadauria
So that gives plenty of time for additional reruns if necessary, but.
0:55:18.680 --> 0:55:20.70
Jeffrey Gruttadauria
But yeah, so.
0:55:21.300 --> 0:55:22.630
Jeffrey Gruttadauria
There's additional.
0:55:23.500 --> 0:55:24.990
Jeffrey Gruttadauria
Notes here.
0:55:26.310 --> 0:55:32.260
Jeffrey Gruttadauria
For if, if if it runs successfully but we fail to download the blobs.
0:55:33.40 --> 0:55:33.570
Jeffrey Gruttadauria
On.
0:55:34.490 --> 0:55:35.740
Jeffrey Gruttadauria
We should be.
0:55:36.620 --> 0:55:39.90
Jeffrey Gruttadauria
That we should be having OPS run.
0:55:39.800 --> 0:55:46.220
Jeffrey Gruttadauria
The PRC 579, a job or yeah job in TPS prod.
0:55:47.210 --> 0:55:53.870
Jeffrey Gruttadauria
Umm I I don't remember who that was added by. Was that Mike or Jeff B?
0:55:55.60 --> 0:55:55.750
Jeffrey Gruttadauria
What do you 2?
0:56:0.40 --> 0:56:9.730
Mike Zuber
That was that was me. I think this you're referring to the issue where it was having trouble downloading from Azure.
0:56:10.200 --> 0:56:10.530
Jeffrey Gruttadauria
Umm.
0:56:11.170 --> 0:56:22.600
Mike Zuber
Yeah. OK, so this this job is just a the TPS plan that called AZ Copy, I think, yeah. To download the file as opposed to having container controller do it.
0:56:25.90 --> 0:56:25.470
Jeffrey Gruttadauria
OK.
0:56:24.740 --> 0:56:33.70
Mike Zuber
For whatever reason, an easy copy was more successful in dealing with, I would say like transient network issues.
0:56:35.160 --> 0:56:35.470
Jeffrey Gruttadauria
OK.
0:56:35.540 --> 0:56:35.750
Jeffrey Gruttadauria
OK.
0:56:35.590 --> 0:56:37.620
Mike Zuber
So that that's why this is in here.
0:56:38.450 --> 0:56:41.950
Jeffrey Gruttadauria
And it just sends it right to the output folder then OK.
0:56:41.850 --> 0:56:44.190
Mike Zuber
Yeah. Which is where it would normally go anyway.
0:56:44.630 --> 0:56:45.0
Jeffrey Gruttadauria
Yeah.
0:56:46.830 --> 0:56:47.520
Jeffrey Gruttadauria
OK.
0:56:49.310 --> 0:56:59.850
Jeffrey Gruttadauria
Yeah. And then if if this error occurs and then we try these step OPS tries these steps and it still fails, then they they pay you out to us.
0:57:1.190 --> 0:57:6.990
Jeffrey Gruttadauria
If they if, if they don't see a similar error to the one specified above.
0:57:7.870 --> 0:57:14.510
Jeffrey Gruttadauria
Then you know rerun the job and they'll they'll pay us. If the failure persists.
0:57:17.230 --> 0:57:40.180
Jeffrey Gruttadauria
So this goes over an overview of what happens in in the in the container. Basically it looks up all of the products in the product hierarchy, looks up the prices for each product, and generates a price record out. We write all the price records to a file and then we upload the file. Once all the records have been written out.
0:57:42.720 --> 0:57:47.10
Jeffrey Gruttadauria
This is a container controller job, so we pass in the.
0:57:48.90 --> 0:57:57.820
Jeffrey Gruttadauria
The job name and since we don't have any input files for this, we we tell container controller to skip the uploads step.
0:58:2.450 --> 0:58:6.290
Jeffrey Gruttadauria
Yeah. And then this just shows where the output Files Go.
0:58:7.970 --> 0:58:12.150
Jeffrey Gruttadauria
And you know, just some troubleshooting tips specific for.
0:58:13.70 --> 0:58:15.800
Jeffrey Gruttadauria
Container controller control M.
0:58:17.380 --> 0:58:17.920
Jeffrey Gruttadauria
Etcetera.
0:58:20.630 --> 0:58:24.120
Jeffrey Gruttadauria
As for the job that follows it, PRC 580.
0:58:25.50 --> 0:58:28.470
Jeffrey Gruttadauria
This again, it's immediate. It runs daily.
0:58:29.240 --> 0:58:34.280
Jeffrey Gruttadauria
And it runs upon completion of PRC 579.
0:58:35.510 --> 0:58:39.970
Jeffrey Gruttadauria
Ah, this is a TPS plan that takes the output file and.
0:58:41.30 --> 0:58:44.60
Jeffrey Gruttadauria
Moves it to a GDG on the mainframe.
0:58:45.680 --> 0:58:46.110
Jeffrey Gruttadauria
On.
0:58:48.310 --> 0:58:52.670
Jeffrey Gruttadauria
Yeah, pretty simple. This usually takes under 5 minutes to do.
0:58:57.640 --> 0:58:59.820
Jeffrey Gruttadauria
Any questions before I go on to the incidents?
0:59:5.790 --> 0:59:8.440
Jeffrey Gruttadauria
Ohh I never went over the.
0:59:9.320 --> 0:59:10.470
Jeffrey Gruttadauria
The current state again.
0:59:11.300 --> 0:59:13.710
Jeffrey Gruttadauria
So this bottom section.
0:59:14.650 --> 0:59:16.780
Jeffrey Gruttadauria
Is is for the.
0:59:18.980 --> 0:59:21.870
Jeffrey Gruttadauria
Up stuff that basically stuff that feeds into PS.
0:59:22.590 --> 0:59:23.940
Jeffrey Gruttadauria
779-B.
0:59:24.960 --> 0:59:28.930
Jeffrey Gruttadauria
There's this one mainframe job that.
0:59:30.210 --> 0:59:35.600
Jeffrey Gruttadauria
That triggers this job upon completion on.
0:59:36.950 --> 0:59:45.340
Jeffrey Gruttadauria
And then there's our job, which runs at 8:00 PM the day before. I'll have this updated so that it's 8:00 PM.
0:59:47.240 --> 0:59:50.700
Jeffrey Gruttadauria
And like I said, it runs the processor.
0:59:51.810 --> 0:59:54.0
Jeffrey Gruttadauria
And generates an output file.
0:59:54.810 --> 1:0:4.220
Jeffrey Gruttadauria
Pierc 580 takes that output file and moves it to the mainframe. So once both of these jobs have been completed.
1:0:5.370 --> 1:0:8.0
Jeffrey Gruttadauria
PS779-B will run.
1:0:9.290 --> 1:0:10.0
Jeffrey Gruttadauria
And then.
1:0:10.780 --> 1:0:15.70
Jeffrey Gruttadauria
Once this once it has run then.
1:0:16.270 --> 1:0:17.980
Jeffrey Gruttadauria
Once this and.
1:0:18.620 --> 1:0:22.980
Jeffrey Gruttadauria
PS577B have run then the P780 file runs.
1:0:26.790 --> 1:0:28.860
Jeffrey Gruttadauria
And like like with any other.
1:0:29.420 --> 1:0:35.430
Jeffrey Gruttadauria
Uh, current state diagram. Anything that's in Gray is stuff that is not owned by us.
1:0:41.20 --> 1:0:41.610
Jeffrey Gruttadauria
Alright.
1:0:42.840 --> 1:0:54.870
Jeffrey Gruttadauria
As far as incidents go, we have a we had about 30 total, half of which were automatic or manual restarts by operations.
1:0:56.220 --> 1:0:57.440
Jeffrey Gruttadauria
On so.
1:0:58.100 --> 1:1:0.950
Jeffrey Gruttadauria
For an example of that on.
1:1:3.420 --> 1:1:7.780
Jeffrey Gruttadauria
We've got this. The person who was on call for operations.
1:1:9.450 --> 1:1:11.10
Jeffrey Gruttadauria
Did an automatic retry.
1:1:12.380 --> 1:1:13.110
Jeffrey Gruttadauria
And it worked.
1:1:13.870 --> 1:1:14.290
Jeffrey Gruttadauria
So.
1:1:15.510 --> 1:1:18.610
Jeffrey Gruttadauria
There was nothing for us to do on that one and we never got paged.
1:1:21.90 --> 1:1:29.80
Jeffrey Gruttadauria
The next one is related to the Wegmans API and or its traffic manager.
1:1:29.910 --> 1:1:34.410
Jeffrey Gruttadauria
Because this program is making.
1:1:35.730 --> 1:1:36.690
Jeffrey Gruttadauria
Is making.
1:1:37.600 --> 1:1:39.850
Jeffrey Gruttadauria
At least three or four.
1:1:41.630 --> 1:1:45.650
Jeffrey Gruttadauria
Three or four API calls for every product.
1:1:46.890 --> 1:1:54.90
Jeffrey Gruttadauria
We will sometimes run into issues where we're overwhelming the Wegmans API because.
1:1:55.30 --> 1:1:55.660
Jeffrey Gruttadauria
Because.
1:1:56.660 --> 1:1:59.950
Jeffrey Gruttadauria
You know their their service isn't set up to.
1:2:1.630 --> 1:2:4.720
Jeffrey Gruttadauria
To handle the amount of traffic we're sending it.
1:2:5.750 --> 1:2:19.70
Jeffrey Gruttadauria
Umm. Basically the only thing we can do or there's one of two things we can do in this situation that is letting the enterprise services team member who's on call?
1:2:19.900 --> 1:2:24.410
Jeffrey Gruttadauria
Know that we're experiencing this issue. Sometimes they'll bump up.
1:2:25.260 --> 1:2:25.910
Jeffrey Gruttadauria
The.
1:2:26.870 --> 1:2:30.670
Jeffrey Gruttadauria
The service for us to run better on. Sometimes they won't.
1:2:31.990 --> 1:2:34.500
Jeffrey Gruttadauria
In either case, we need to rerun it.
1:2:35.230 --> 1:2:39.60
Jeffrey Gruttadauria
And we need to rerun the job until it succeeds.
1:2:39.940 --> 1:2:40.300
Jeffrey Gruttadauria
So.
1:2:41.90 --> 1:2:43.210
Jeffrey Gruttadauria
An example of that is.
1:2:44.300 --> 1:2:44.990
Jeffrey Gruttadauria
This one.
1:2:46.30 --> 1:2:53.810
Jeffrey Gruttadauria
Basically, create a task to rerun PRC 579 and work with OPS to have it rerun as.
1:2:54.520 --> 1:2:56.340
Jeffrey Gruttadauria
My much is necessary.
1:2:59.110 --> 1:2:59.520
Jeffrey Gruttadauria
Umm.
1:2:59.140 --> 1:3:3.370
Bill Sullivan
And and assuming that this was, this was created before your replicanator.
1:3:4.550 --> 1:3:7.10
Jeffrey Gruttadauria
Uh, no, actually so.
1:3:8.70 --> 1:3:14.340
Jeffrey Gruttadauria
The reason we can't use replicanator for it is because replicanator does not reliably.
1:3:20.140 --> 1:3:20.670
Bill Sullivan
Uh.
1:3:15.40 --> 1:3:23.70
Jeffrey Gruttadauria
On does not reliably store price information, so we can't, so we can't go to it for that.
1:3:24.910 --> 1:3:40.940
Jeffrey Gruttadauria
And I believe Jen had mentioned that Replicanator is not good for prices because we weren't getting pricing events properly. And I I don't think we are still to this day. Is that correct, Jen?
1:3:44.810 --> 1:3:45.40
Jennifer Greenwald
Yes.
1:3:52.550 --> 1:3:52.910
Jeffrey Gruttadauria
OK.
1:3:54.170 --> 1:3:54.460
Jeffrey Gruttadauria
Mm-hmm.
1:3:45.120 --> 1:3:57.710
Jennifer Greenwald
Yes. Well, I can't speak exactly to the state of the price events. We haven't really been tracking lately because we don't use it for anything. But I am sure that they never fixed the department 45 problem.
1:3:58.330 --> 1:3:58.780
Jeffrey Gruttadauria
OK.
1:4:3.150 --> 1:4:3.720
Jeffrey Gruttadauria
Alright.
1:4:6.60 --> 1:4:10.290
Jeffrey Gruttadauria
Yeah, and this has happened on three such occasions this year.
1:4:10.980 --> 1:4:22.530
Jeffrey Gruttadauria
On one of the instances we actually had created an incident for someone at that networking I wanna say to support. I know see.
1:4:23.990 --> 1:4:24.590
Bill Sullivan
Yeah.
1:4:24.160 --> 1:4:24.710
Patrick Valasek
Uh, yeah.
1:4:25.750 --> 1:4:39.400
Mike Zuber
Yeah, that was. Ohh yeah. Ohh yeah. That was the one where basically wegmans's ISP like their fiber provider. They had a bad optic somewhere along their network.
1:4:41.780 --> 1:4:44.610
Mike Zuber
And prior to that being that being.
1:4:51.10 --> 1:4:51.260
Jeff Bloom
Yeah.
1:4:45.90 --> 1:4:52.80
Mike Zuber
I resolved it was causing us all sorts of headaches with those jobs you can see down towards the bottom of the screen.
1:5:3.640 --> 1:5:4.350
Jeffrey Gruttadauria
All right.
1:5:5.350 --> 1:5:8.0
Jeffrey Gruttadauria
Anything else I should focus in on here?
1:5:9.600 --> 1:5:11.740
Patrick Valasek
Don't think so. Just want go ahead, Mike please.
1:5:12.780 --> 1:5:13.60
Patrick Valasek
No.
1:5:9.470 --> 1:5:17.520
Mike Zuber
I actually we go on alright. I would say to use this opportunity to illustrate a question that was asked earlier. This was.
1:5:18.180 --> 1:5:18.720
Mike Zuber
Umm.
1:5:21.640 --> 1:5:35.50
Mike Zuber
Because I had already had dealt with the networking group for previous issues, I knew this was not an Azure issue, so I escalated to an internal Wegmans team. I didn't create an Azure ticket to address this.
1:5:39.900 --> 1:5:41.30
Mike Zuber
That's all I wanted to add.
1:5:42.410 --> 1:5:42.790
Jeffrey Gruttadauria
OK.
1:5:42.710 --> 1:5:48.220
Patrick Valasek
Yeah. I just wanted to mention keeping an eye on the clock. We do wanna make sure we save time here for our.
1:5:49.240 --> 1:5:50.250
Patrick Valasek
Playback session so.
1:5:51.430 --> 1:5:56.680
Jeffrey Gruttadauria
Yeah, I I should be done after we go over the the next few.
1:6:0.960 --> 1:6:1.290
Patrick Valasek
Great.
1:5:57.490 --> 1:6:1.520
Jeffrey Gruttadauria
Uh bugs cause they're a lot less involved than this one.
1:6:2.910 --> 1:6:15.940
Jeffrey Gruttadauria
Uh, just worth noting is Mike, it looks like you associated incidents that we were we were tagged in that were related to this issue. Is it that's standard practice, right?
1:6:16.620 --> 1:6:17.190
Mike Zuber
Yes.
1:6:18.110 --> 1:6:18.440
Jeffrey Gruttadauria
OK.
1:6:18.480 --> 1:6:27.820
Mike Zuber
That that helps whoever is working the ticket on the Wegmans side, it helps them come to determine severity and helps them prioritize the ticket.
1:6:32.290 --> 1:6:32.550
Jeffrey Gruttadauria
Right.
1:6:35.200 --> 1:6:38.390
Jeffrey Gruttadauria
OK, so this next one is.
1:6:39.360 --> 1:7:2.140
Jeffrey Gruttadauria
You know another instance where the files generated successfully but container controller failed to download the records. Initially we would download the files and place them manually, but Mike had created the TPS plan that we mentioned earlier which does that for us. So we now have OPS run that.
1:7:3.50 --> 1:7:5.50
Jeffrey Gruttadauria
So example of that.
1:7:7.990 --> 1:7:10.190
Jeffrey Gruttadauria
Ticket for that would be this one.
1:7:12.800 --> 1:7:13.290
Jeffrey Gruttadauria
So.
1:7:15.170 --> 1:7:16.90
Jeffrey Gruttadauria
We basically.
1:7:17.470 --> 1:7:24.10
Jeffrey Gruttadauria
First we tried rerunning the job. It looks like and then we just had.
1:7:25.500 --> 1:7:28.970
Jeffrey Gruttadauria
Umm, we just had OPS run a TPS plan.
1:7:30.40 --> 1:7:31.600
Jeffrey Gruttadauria
The TPS plan.
1:7:37.250 --> 1:7:40.660
Jeffrey Gruttadauria
Alright. And the last one for PRC 579.
1:7:41.340 --> 1:7:54.930
Jeffrey Gruttadauria
Was again caused by an infrastructure issue with the Azure Container service. For this one, we actually reran the job locally and moved the output files.
1:7:56.190 --> 1:8:3.420
Jeffrey Gruttadauria
Where where they needed to go on. Then we had OPS force complete the job and allow it to move on.
1:8:11.210 --> 1:8:22.120
Jeffrey Gruttadauria
Yeah. And with this one in particular, it runs long in Azure and it runs even longer running from a VM like what did it take like 4 hours?
1:8:24.640 --> 1:8:27.310
Mike Zuber
Sorry my attention was turned away for a moment.
1:8:28.500 --> 1:8:33.500
Mike Zuber
Ohh jeez yeah it this. This was the. Yeah, the the container Azure container service.
1:8:34.290 --> 1:8:34.610
Jeffrey Gruttadauria
Yep.
1:8:35.220 --> 1:8:39.70
Mike Zuber
Yeah, it's it took more than four hours 5 actually.
1:8:40.200 --> 1:8:40.610
Jeffrey Gruttadauria
How?
1:8:41.190 --> 1:8:41.580
Mike Zuber
Yeah.
1:8:46.650 --> 1:9:0.330
Jeffrey Gruttadauria
Alright. But like I said, this was a one off incident. It only happened once the other the other one. The other types of issues were, you know 14 for the automated retries or.
1:9:1.70 --> 1:9:10.780
Jeffrey Gruttadauria
Manual OPS retries 3 for the Wegmans API or traffic manager incidents and seven for the.
1:9:11.470 --> 1:9:15.870
Jeffrey Gruttadauria
You know container controller failed. Download the files steps.
1:9:18.510 --> 1:9:22.800
Jeffrey Gruttadauria
Umm. And then for PRC 580 this is the TPS plan.
1:9:23.570 --> 1:9:35.310
Jeffrey Gruttadauria
On the only incidents that showed up for this involved the mainframe undergoing an upgrade, rendering it inaccessible to send files to for a while.
1:9:35.990 --> 1:9:39.80
Jeffrey Gruttadauria
Uh, in most cases, OPS delayed.
1:9:40.70 --> 1:9:42.670
Jeffrey Gruttadauria
The the reruns to.
1:9:43.390 --> 1:9:52.590
Jeffrey Gruttadauria
Until after the upgrade was completed and in one case the upgrade once the upgrade was fixed because it broke something.
1:9:53.320 --> 1:9:53.680
Jeffrey Gruttadauria
Uh.
1:9:54.420 --> 1:9:58.370
Jeffrey Gruttadauria
And an example of that is this incident.
1:10:4.230 --> 1:10:5.840
Jeffrey Gruttadauria
So they noted.
1:10:6.800 --> 1:10:14.760
Jeffrey Gruttadauria
That the mainframe was down for maintenance work and opted to wait until it reran.
1:10:15.490 --> 1:10:18.350
Jeffrey Gruttadauria
Or wait until it was back up again to rerun.
1:10:19.950 --> 1:10:22.870
Jeffrey Gruttadauria
Well then it failed.
1:10:23.680 --> 1:10:27.580
Jeffrey Gruttadauria
I believe so. We got paged for it and it looks like.
1:10:28.320 --> 1:10:38.580
Jeffrey Gruttadauria
There was another, but there was an issue with the mainframe upgrade. So then we had to wait for for that to complete in order to rerun it again.
1:10:40.200 --> 1:10:42.650
Jeffrey Gruttadauria
And it reran successfully that time.
1:10:50.490 --> 1:10:54.210
Jeffrey Gruttadauria
And that's about it. Any questions on the price aggregator?
1:10:58.390 --> 1:10:58.780
Patrick Valasek
Thanks Jeff.
1:11:1.130 --> 1:11:1.310
Jeffrey Gruttadauria
Right.
1:11:1.860 --> 1:11:2.180
Patrick Valasek
Right.
1:11:4.180 --> 1:11:8.130
Patrick Valasek
And there were a few minutes over the time that we planned for this morning. But.
1:11:9.370 --> 1:11:15.920
Patrick Valasek
If we still should use the uh remaining 18 minutes here and we can extend if needed for.
1:11:17.90 --> 1:11:18.760
Patrick Valasek
Playback from the TCS group.
1:11:31.770 --> 1:11:32.600
Vishnu S
With the share music.
1:11:45.130 --> 1:11:46.170
Vishnu S
It's my screen is good.
1:11:47.240 --> 1:11:47.970
Patrick Valasek
Yes, we can see.
1:11:49.380 --> 1:11:56.130
Vishnu S
Yes, I don't know if today's playback session we're going to cover up with Big Q service.
1:11:57.810 --> 1:11:59.680
Vishnu S
I'm idea was like moving.
1:12:0.970 --> 1:12:4.270
Vishnu S
So basically this big so with this.
1:12:4.340 --> 1:12:6.750
Vishnu S
Have no it's a window service.
1:12:8.40 --> 1:12:15.780
Vishnu S
He's run every 30 seconds and I keeps polling the big string queue to monitor the the picture parts.
1:12:16.520 --> 1:12:27.130
Vishnu S
So based on the records, it will create a 3 files and get it into the output location. Those files can used by account they see to see STC STS and shrink.
1:12:29.410 --> 1:12:34.570
Vishnu S
Uh, yeah. Counting to counter the job is CTC 500.
1:12:36.750 --> 1:12:46.510
Vishnu S
And yes, TCS Sports St. CSTS 575 and shrink process is S IX575. Basically they S store to store.
1:12:47.810 --> 1:12:52.690
Vishnu S
Store to store movement. Basically tracks the transfer of routes between these tools.
1:12:53.400 --> 1:12:58.990
Vishnu S
And the counter to counter is, uh, track the item movement between the departments.
1:13:0.400 --> 1:13:5.210
Vishnu S
Uh string files is basically deals with that loss of the product spoilage, yes.
1:13:7.80 --> 1:13:7.890
Vishnu S
And.
1:13:10.310 --> 1:13:16.140
Vishnu S
Outlook files 15 this location it's I think the screen is.
1:13:17.680 --> 1:13:20.150
Vishnu S
I'm a little bit making this pain is a little larger.
1:13:21.940 --> 1:13:34.990
Vishnu S
Yeah, this is output file location. Uh here the files kept in the format of C2C pics and this STS reference. The pics you extract a string file.
1:13:35.910 --> 1:13:41.820
Vishnu S
And we have additional 2 folders which we use for a bad messages and skip messages which we will talk later.
1:13:44.540 --> 1:13:51.870
Vishnu S
And this this is the service log file which capture the logs of this picturesque service events.
1:13:52.710 --> 1:14:4.150
Vishnu S
Basically, these logs will updates every 30 seconds if it is not updating in 30 seconds. It seems there's any there is an issue with the process it not processing the records and they expected timelines.
1:14:5.320 --> 1:14:7.300
Vishnu S
So this may need some attention.
1:14:9.360 --> 1:14:11.510
Vishnu S
For tracking this application status.
1:14:14.180 --> 1:14:32.110
Vishnu S
And this is a bad fine format. This looks this data in the file. It's something seems wrong this number 9999 it's not in the expected department format. Basically the Wegmans Stores Department ranges start from 1 to 200.
1:14:32.940 --> 1:14:39.620
Vishnu S
And do not want to 999 is a non store locations. It's basically workhouses.
1:14:41.90 --> 1:14:44.220
Vishnu S
And this number start with tilt is.
1:14:46.980 --> 1:14:51.470
Vishnu S
Basically the store numbers. The first one is at Home store.
1:14:52.210 --> 1:14:59.600
Vishnu S
And the second tilt after the number is so from store and then the last one is 2/2 store.
1:15:3.60 --> 1:15:10.990
Vishnu S
And this job stream is basically this fixed in service have three jobs streams, C2C. Yes to yes and pigs.
1:15:11.830 --> 1:15:30.590
Vishnu S
This executes every night, every midnight, before this job start, it will rain in the for sourceware output file and it really removes the under score in profits because to prevent the over overriding the new data or it avoid the deadlocks.
1:15:31.480 --> 1:15:32.720
Vishnu S
So oil.
1:15:34.230 --> 1:15:38.960
Vishnu S
After updating these, uh, after renaming this file basically that.
1:15:41.270 --> 1:15:42.210
Vishnu S
Yes, two years.
1:15:43.190 --> 1:15:52.460
Vishnu S
Yeah, C2C is just a dump file. It's used for an auditing and archiving purpose and main are a main data transfer is happening in service bus.
1:15:53.540 --> 1:16:1.540
Vishnu S
And yes, two years and string file will be transferred to the next job stream or input folder for further processing.
1:16:7.270 --> 1:16:8.150
Vishnu S
Yeah.
1:16:10.40 --> 1:16:16.750
Vishnu S
And coming to the alerts spot, there are multiple safety Nets implemented for this job stream.
1:16:17.620 --> 1:16:28.250
Vishnu S
It gives a. The additional check is Azure Service bus and Azure Service bus is basically monitor the service queue for four hours. If it is doesn't.
1:16:29.150 --> 1:16:38.450
Vishnu S
Get any noise, any records in this queue, it will just start my alerting the respective users. For our troubleshooting purpose.
1:16:39.530 --> 1:17:1.940
Vishnu S
And the other thing is the job, yes, say expires on five shrink process, it's a TPS plan which will flirt, transfer the file from one location to another if it putting find any files then it naturally there is an issue with the file system issue with the source system. It doesn't process any files in that way. That's why the job will file. It should expect one or at least one file.
1:17:2.650 --> 1:17:3.370
Vishnu S
To process.
1:17:4.750 --> 1:17:13.880
Vishnu S
And other ways capturing the logs if it is not capturing anything in the 30 seconds, then there were there. There should be an issue with the system.
1:17:16.230 --> 1:17:18.560
Vishnu S
And six pipeline.
1:17:24.120 --> 1:17:38.670
Vishnu S
It have a 2 pipelines or picked you service CI and Big Q service service control. This is basically first one big excuse of this year is for implementing this service and the other one is just to stop and start the service.
1:17:39.810 --> 1:17:48.320
Vishnu S
It was applications. If it is not processing any messages it it's a better option to try to restore the service through this pipeline.
1:17:50.50 --> 1:17:55.420
Vishnu S
And that's about the excuse service process and moving to.
1:17:56.560 --> 1:17:57.500
Vishnu S
My name is Corey.
1:18:5.260 --> 1:18:16.160
Vishnu S
Yeah, this idea must file query application we are using is mainly for extracting the for records from the mainframe or EDW databases.
1:18:16.860 --> 1:18:17.450
Jason Long
Excuse me.
1:18:16.890 --> 1:18:18.300
Vishnu S
And yes.
1:18:18.140 --> 1:18:35.870
Jason Long
Sorry, can I interject on Pixie service before I move on to? I was trying to speak up before. I didn't realize I was muted pickup service. One thing that's important to know is with the counter to counter transfer records file. That file is only a backup of the data that's actually sent to counter to counter.
1:18:36.610 --> 1:18:42.0
Jason Long
Current account or receives this data from Pixie service via an Azure service bus.
1:18:42.870 --> 1:18:43.860
Jeff Bloom
Yeah, he mentioned that.
1:18:43.590 --> 1:18:43.910
Vishnu S
Yeah.
1:18:45.40 --> 1:18:46.760
Jeff Bloom
Yeah. Yep, Yep.
1:18:44.190 --> 1:18:47.270
Jason Long
He did OK. I I missed that part. Alright. Never mind.
1:18:48.600 --> 1:18:48.910
Vishnu S
Thank you.
1:18:52.150 --> 1:19:7.270
Vishnu S
Yeah. We try, Dave must. And this application is mainly used to extract the data from the mainframe W with the ID bus file query and export it into the Azure BLOB storage for consuming the downstream jobs.
1:19:8.310 --> 1:19:17.230
Vishnu S
This service running in the running WFM member Pad 01 is as broad and TSM of pads 01 in the test environment.
1:19:24.900 --> 1:19:33.150
Vishnu S
Yeah, this I already mentioned. This file is the exported result file will be uploaded into the block storage account and it is used by 15 job streams.
1:19:34.170 --> 1:19:36.960
Vishnu S
This is a simple uh controller.
1:19:38.110 --> 1:19:40.620
Vishnu S
Idea must query to IMS query stream.
1:19:41.270 --> 1:19:56.940
Vishnu S
Umm, the first one SC765 users ID Ms. file for it to import the mainframe file and put it into the block storage. Then from there SC766 will get the get us an input file and process to downstream.
1:20:4.950 --> 1:20:24.530
Vishnu S
Yeah, this is a portal of TPS plan. Looks like in here first we are just executing the script for clear creating the input output folders if it is not exit exist and then we are executing the script to prepare the data. Once the data is prepared we are just.
1:20:24.630 --> 1:20:29.940
Vishnu S
OK, consolidating this as a file and send it to the block storage.
1:20:33.350 --> 1:20:34.90
Mike Zuber
That's correct.
1:20:33.360 --> 1:20:38.210
Vishnu S
The architecture, the architecture diagram of ID Ms. file query is.
1:20:39.380 --> 1:20:45.480
Vishnu S
Is the four stages fast? The straight line indicates the request and the daughter lines indicates the response.
1:20:46.550 --> 1:20:53.320
Vishnu S
That WFM member Bad 01 requires to get this track the storage account credentials from Azure storage account.
1:20:54.540 --> 1:21:1.230
Vishnu S
Uh. Once the storage account details received again, if the sending the request to get the job specific query definition informations.
1:21:1.950 --> 1:21:8.990
Vishnu S
Based on the job query definition, it queries the ID idea must database to get the proper vessels.
1:21:9.920 --> 1:21:21.380
Vishnu S
Once, after receiving the vessels ID must file Curie create a CSV file or target file based on the output. Based on the results which it receive.
1:21:22.190 --> 1:21:31.940
Vishnu S
And the final upload final, uh generated file will be transferred to the Azure storage account. This is the basic architecture of the ideals file Courier.
1:21:35.190 --> 1:21:35.640
Vishnu S
Yes.
1:21:32.940 --> 1:21:37.700
Mike Zuber
All right, actually I want to make something a little more clear on that slide, so.
1:21:38.580 --> 1:21:39.290
Mike Zuber
The.
1:21:40.470 --> 1:21:43.620
Mike Zuber
That middle line and that query database line.
1:21:45.750 --> 1:21:57.590
Mike Zuber
The target database it could be Idms Ed dot or EDW. That decision is made based on the job specific query definition that is fetched that is.
1:21:58.900 --> 1:22:6.450
Mike Zuber
There is a there is a property in that Jason file that tells items file query which database to talk to.
1:22:8.870 --> 1:22:9.400
Vishnu S
OK.
1:22:21.20 --> 1:22:29.790
Vishnu S
And this is the release pipeline definition of it's. Yeah, in this YAML configuration we have just mentioned highlighting the configurations.
1:22:31.250 --> 1:22:35.860
Vishnu S
Ah, here we are defining the storage account details and block information.
1:22:36.940 --> 1:22:42.440
Vishnu S
Those informations are then captured in the ID must find 3 Yahoo's publish Yammer section.
1:22:45.930 --> 1:22:57.350
Vishnu S
This is our config file where the the value which starts with the double under score and ends with the double under score. It will be replaced by the pipeline with the actual values.
1:23:3.720 --> 1:23:19.690
Vishnu S
And this is a Jason configuration file for SC765. It basically consist of the storage account details and file name information as well as the idea must script.
1:23:20.470 --> 1:23:24.640
Vishnu S
Based on this query, the file will be generated into the target location.
1:23:30.40 --> 1:23:33.270
Vishnu S
And they're building and deployment the pipeline portion it.
1:23:34.700 --> 1:23:40.270
Vishnu S
I said are you pipeline YAML file which uses for building the pipeline?
1:23:42.0 --> 1:23:44.950
Vishnu S
And it in involves the five stages.
1:23:46.910 --> 1:23:50.220
Vishnu S
Sorry, 3 stages on build. Uh release and publish.
1:23:56.970 --> 1:24:11.980
Vishnu S
OK, basic troubleshooting steps we used to follow the KB documents and the outputs will be presented in the WFM member background, batch IDs, Korean logs. Based on this for read query name, we can get the logs.
1:24:13.720 --> 1:24:15.650
Vishnu S
And these are the basic troubleshootings.
1:24:18.380 --> 1:24:21.890
Vishnu S
For the the recovery of the jobs.
1:24:24.170 --> 1:24:27.280
Vishnu S
And this is a successful execution of the log file.
1:24:33.410 --> 1:24:50.140
Vishnu S
I'm in the failed execution with the error before come the complete error message captured in this uh log file. If you notice this, that it's basically basically because of the OPC exceptions captured due to that the file with the idea was application didn't went well.
1:24:50.530 --> 1:24:50.770
Vishnu S
It's.
1:24:50.950 --> 1:25:5.20
Vishnu S
Yeah, when this application is not working there respective control of job will get filed right? So once these source system is up and running then we may restart this job to transactions.
1:25:11.700 --> 1:25:16.260
Vishnu S
Yeah, that's all about. The idea was fine, but if I missed anything and please add.
1:25:20.150 --> 1:25:30.590
Mike Zuber
OK. I just want to reiterate that how IDs file query knows what query definition of download is that it gets that.
1:25:31.640 --> 1:25:36.910
Mike Zuber
On the command line as a command line parameter that I don't think that's in this slide deck. Maybe it is.
1:25:37.630 --> 1:25:39.810
Mike Zuber
UM on the 7th slide.
1:25:43.880 --> 1:25:45.590
Vishnu S
Yeah, this is the one, yeah.
1:25:44.120 --> 1:25:49.520
Mike Zuber
Like is it not? No, it's that it's not it. Actually. I'm sorry. Check the 8th slide.
1:25:58.580 --> 1:25:59.100
Vishnu S
Yes.
1:25:53.940 --> 1:26:5.520
Mike Zuber
Here we go. Yeah, the query name. If you see the towards the top of the screen it highlighted in blue query name SEC 765 weekly sales that maps to a file in the BLOB storage account.
1:26:7.200 --> 1:26:7.910
Vishnu S
OK then.
1:26:6.920 --> 1:26:15.880
Mike Zuber
That's how I emits file. Query knows which file to download and open and then that that file contains the. The more of the database details and the query to run.
1:26:19.300 --> 1:26:20.220
Vishnu S
Look 32.
1:26:20.770 --> 1:26:21.250
Mike Zuber
What's up?
1:26:23.330 --> 1:26:23.700
Vishnu S
Thank you.
1:26:30.360 --> 1:26:31.320
Vishnu S
Yeah, Patrick around.
1:26:32.380 --> 1:26:33.30
Patrick Valasek
Thank you Vishnu.
1:26:34.770 --> 1:26:35.300
N.D. Vijayakumar
Hey.
1:26:33.330 --> 1:26:42.140
Patrick Valasek
Umm. Feels very useful and you know the timing I think is good as well because tomorrow we'll look at store to store and counter to counter so having that.
1:26:43.380 --> 1:26:44.350
Patrick Valasek
Excuse service.
1:26:43.960 --> 1:26:52.970
N.D. Vijayakumar
Where? Where do you? Yeah. I'm sorry, Patrick. To cut you. Where do you solu experts? Where do you see Vishnu's presentation?
1:26:53.960 --> 1:26:55.250
N.D. Vijayakumar
Feeling comfortable?
1:26:56.350 --> 1:26:59.530
N.D. Vijayakumar
Yeah, gaps. But what's your take quick on that.
1:27:4.220 --> 1:27:17.630
Patrick Valasek
I I feel like Vishnu did a an adequate job, certainly of of doing a recap there thought that you know Jason and Mike had a couple points, but no, I think that that was certainly suitable.
1:27:19.290 --> 1:27:19.720
N.D. Vijayakumar
Thanks.
1:27:21.40 --> 1:27:21.270
N.D. Vijayakumar
Thanks.
1:27:22.100 --> 1:27:22.300
Patrick Valasek
Yep.
1:27:23.770 --> 1:27:24.140
Patrick Valasek
OK.
1:27:26.90 --> 1:27:26.870
N.D. Vijayakumar
Share tomorrow.
1:27:25.490 --> 1:27:30.360
Patrick Valasek
I think that's all for today and tomorrow we're on for 60 minutes.
1:27:31.480 --> 1:27:32.180
Patrick Valasek
Unless.
1:27:33.520 --> 1:27:36.470
Patrick Valasek
Vishnu, you feel there's another playback.
1:27:37.60 --> 1:27:42.390
Patrick Valasek
Uh, it's group of material to share? If so, we can certainly extend.
1:27:44.700 --> 1:27:45.730
Patrick Valasek
So keep that in mind.
1:27:47.220 --> 1:27:56.220
Patrick Valasek
Otherwise, we'll go for 60 minutes same time, and Mike and Jason will present store to store and counter to counter transfers.
1:27:57.570 --> 1:27:58.600
Patrick Valasek
Uh, Bill, I think.
1:27:57.810 --> 1:27:58.790
Vishnu S
Patrick will come.
1:27:59.510 --> 1:28:3.390
Vishnu S
Eric will have the next playback section, you know next week.
1:28:4.10 --> 1:28:4.920
Patrick Valasek
OK, very good.
1:28:5.800 --> 1:28:19.190
Patrick Valasek
Umm and Bill, I think that I saw. I can't remember in what communication today but you are planning to get next week's meetings out on calendars today tomorrow so.
1:28:22.10 --> 1:28:22.950
Patrick Valasek
You're unmute there, bro.
1:28:24.980 --> 1:28:31.30
Bill Sullivan
Sorry. Yeah. So I'm guessing we want to would wanna just do the 60 minutes and then the 90 as needed.
1:28:31.990 --> 1:28:32.610
Patrick Valasek
I would say yes.
1:28:33.780 --> 1:28:34.140
Bill Sullivan
OK.
1:28:35.730 --> 1:28:36.360
Bill Sullivan
Sounds good.
1:28:35.550 --> 1:28:47.100
N.D. Vijayakumar
Well, since we are talking just one more minute, any update you have with respect to the access to the non prod and so on you you don't have to answer me if you want to mail me or whatever.
1:28:49.330 --> 1:28:49.530
N.D. Vijayakumar
OK.
1:28:51.970 --> 1:28:52.320
N.D. Vijayakumar
OK.
1:28:47.740 --> 1:29:4.950
Bill Sullivan
It is in process. I could tell you that I don't have the answer of when I'm going to be in process, but TPS, so TPS and and the subscriptions for solo are actively being worked on. I'm going to submit another request for you to have access to control. MI believe you're all set with ITSM. Smart IT, right.
 </p>
    
    </div>
  )
}
