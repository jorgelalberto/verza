const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

let modelPromise = {};
let userInput;

const process = async (question) => {
  const model = await modelPromise;
  const answers = await model.findAnswers(question, ` Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Thank you, Brady, and good morning, everyone, and welcome to our second quarter earnings call. Me and my team are pleased to report another
  solid quarter as we continue to advance across all of our strategic key performance indicators. Our newly appointed leadership team remains
  committed to delivering on our key metrics, growth on wireless service revenue and expansion on consolidated adjusted EBITDA and free cash
  flow. We're seeing operational improvements throughout our business and our results are strong. Wireless service revenue was up 3.8% year-over-year
  and adjusted EBITDA was $12 billion for the quarter. Cash flow from operations was very strong in the quarter at $9.7 billion, and free cash flow
  was $5.6 billion. The actions we are taking to accelerate growth, improve operations and ensure a solid balance sheet are working. Our results today illustrate our
  ability to adapt, innovate and excel even in times of economic uncertainty, and we're encouraged by the growing importance of mobility, broadband
  and cloud services in the 5G era in all customer segments. Based on our results this quarter and what we see ahead, I'm confident that we will deliver on our 2023 financial guidance. This is a testament to
  the hard work and the dedication of our team. Now let's look more closely at the performance in mobility, private networks and national broadband. Our consumer wireless strategy of segmentation
  and financial discipline is paying off. This quarter, we saw a year-over-year growth in postpaid phone gross adds, significantly lower promo upgrade
  levels and a sequential improvement in postpaid churn, all according to our strategy. This work is a continuous process, and we're always looking
  for ways to do better. In May, we launched myPlan, a first-of-its-kind customized offering that gives our customers the value, control and simplicity they want. This aligns
  with our strategy of bringing our customers the best value on America's best network. While we still are in early days, myPlan has already helped
  our Verizon Consumer Group delivere notable operational improvements by encouraging customers to take on premium plans, which is driving
  higher ARPA. We're really excited for what's to come from our new platform for selling consumer wireless services, and we are constantly evolving
  our offerings to fit customers' needs. We will also continue to invest in prepaid, to improve performance and expect sequential improvements in the second half of the year. As we
  reported in previous quarters, customer payments remain healthy, which shows both the financial strength of our customer base and the high
  value they place on our services. Our ongoing and effective strategy execution by Sampath and the consumer team supports a stronger Verizon, where we are the premium provider
  with elements like the new myPlan strategic regionalization, persistent cost transformation and a reinforced focus on customer satisfaction. We
  are strengthening our operational blueprint with a local emphasis and effectively positioning ourselves for sustainable growth.
  Verizon Business Group had yet another strong quarter driven by continued solid phone and fixed wireless access performance even as the secular
  decline in wireline continues. For the eighth quarter in a row, Verizon business contributed more than 125,000 postpaid phone net adds, demonstrating
  the resiliency of our service offering to all types of businesses and the value of our world-class network.
  On private networks, we won a mandate from the U.S. Department of Veterans Affairs, and we recently completed work to launch a next-generation
  private networking solution at the Cleveland Clinic that will support their mission for years to come. As a trusted partner to enterprise businesses,
  and federal government, we work closely to transform the networks and bring organizations onto the leading edge of technology development.
  The total addressable market of private wireless is expected to grow significantly, and Verizon is well positioned to capture meaningful share. Our
  broadband strategy delivered more than 400,000 net adds in the quarter on Fios and fixed wireless access, marking another quarter of remarkable
  broadband performance, this represents the third consecutive quarter with more than 400,000 net adds, demonstrating the momentum of our
  growth trajectory. We have established a high pace of customer growth, it's clear, fixed wireless access is here to stay as a proven competitive broadband product.
  We are well on track to meet our target of 4 million to 5 million fixed wireless access subscribers by the end of 2025 from a current base of nearly
  2.3 million subscribers. We also now have an opportunity to segment the fixed wireless access market based on price, and speed tiers so that our
  customers can choose the service that best suits them. Further, we continue to see Net Promoter Scores for wireless and fixed wireless access that significantly exceed those of traditional cable offerings.
  We have the best network in the market. In the next couple of quarters, we will extend our lead with a last tranche of the C-band spectrum. For the
  31st time in a row, Verizon was the most awarded brand for wireless network quality in J.D. Power's U.S. Wireless Network Quality Study, no other
  wireless provider has achieved this, and for 2023, we received top scores among all J.D. Power Study Factors in all 6 regions.
  Additionally, our team continues to innovate within our network, upgrading our infrastructure around the country and successfully testing our
  ability to slice our 5G network. Slicing will allow us to serve customers with dedicated 5G service on a large scale and to meet the diverse needs of
  the largest base of wireless customers in the United States. Next, I want to address the recent news about the legacy lead cable in our network. We take this matter seriously, and to be very clear, lead
  infrastructure makes up a small percentage of our copper network, and we began phasing away from installing new lead cable by the 1950s. At
  Verizon, the communities we serve and our employees are at the heart of everything we do, and we're using a fact and science-based approach
  in our assessment. You will hear more on the topic from Tony later on. Our accelerated plans for efficiency with our new structure, which we put in place over the last couple of quarters are already paying off. Verizon
  Global Services has taken action on a number of opportunities company-wide, realizing significant savings by focusing on IT platform transformation,
  leveraging artificial intelligence, rationalizing our real estate portfolio, and improving our supply chains.
  We're on track to achieve our forecasted $2 billion to $3 billion in annual savings by 2025, these savings in combination with the completion of
  the $10 billion C-band spend position us to generate strong cash flow and continue to invest in our business and pursue dividend increases as we
  execute on our capital allocation strategy. Now I will turn the call over to Tony to discuss our operations and financial performance in more detail.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Thanks, Hans, and good morning. Our results for the second quarter demonstrate our progress towards our 3 priorities of growing wireless service
  revenue, delivering healthy consolidated adjusted EBITDA and increasing free cash flow. Our focus on execution is working and we remain on track
  to meet our financial guidance for 2023. We are happy with our progress, but we have more work to do. We are focused on continuing to improve our performance while remaining
  financially disciplined. In the second quarter, our consumer segment demonstrated better operating results both sequentially and year-over-year
  in postpaid phone net adds. Additionally, we experienced continued strong performance within our business segment both in terms of mobility and FWA subscriber growth.
  The results reflect the benefits of our ongoing C-band deployment and improved go-to-market execution. Consumer postpaid phone net losses
  totaled 136,000 for the quarter compared to 215,000 net losses in the second quarter of 2022.
  Consumer postpaid phone gross adds were strong once again up 6.9% year-over-year, driven by new to Verizon gross adds, which increased
  approximately 19% over the prior year period. We also saw notable growth in consumer postpaid ARPA which was up 6.2% year-over-year. The
  recent launch of myPlan reflects a more segmented and targeted approach. While it's still early, myPlan is driving a significantly higher premium
  mix with nearly 70% of myPlan customers taking the Unlimited Plus option. We are also encouraged by the step activity we are seeing. Consumer postpaid phone churn for the quarter was 0.76%, up 1 basis point compared
  with the same period last year. Higher involuntary churn drove the year-over-year increase, offsetting a modest improvement in voluntary churn.
  Our involuntary churn rates remain at pre-pandemic levels and were flat for the third consecutive quarter.
  It is important to note our performance in existing C-band markets. In the 46 markets where we initially deployed C-band, postpaid phone gross
  add growth was more than 100 basis points higher in the quarter than in non-C-band markets. Additionally, phone churn was 4 basis points lower
  in C-band markets, and our premium mix in C-band markets was 11 percentage points higher.
  Let's now look at our business results. Verizon business once again delivered solid performance and continues to expand on its industry-leading
  wireless market share. Demand continues to be strong in all 3 customer groups resulting in 144,000 phone net adds for the second quarter compared
  to 227,000 for the same period last year, which benefited from some large deals. As Hans mentioned, this marks the eighth consecutive quarter
  where we have delivered over 125,000 business phone net adds. We continue to win high-value business based on the strength of our network performance and value proposition. Notably, we had a recent
  government contract win where we took share from 2 of our competitors at attractive ARPUs.
  Moving on to broadband, we maintain our strong performance with 418,000 total broadband net additions in the second quarter. In the past 4
  quarters, we've added more than 1.6 million broadband subscribers, growing our total broadband subscriber base by more than 21% during that
  time. Growth in FWA remained healthy with 384,000 net adds, up from 256,000 in the prior year period. We now have nearly 2.3 million customers
  on our FWA product that we expect growth to continue at a fairly similar pace in the third quarter.
  On the Fios side, Internet net adds for the second quarter were 54,000, up from 36,000 in the second quarter of last year. Despite continued softness
  in household move activity, gross adds rose year-over-year and our retention levels continue to be strong . Our value market team continues to
  take steps to address some of the softness we saw in the first half of the year. Prepaid net losses totaled 304,000 in the second quarter. Our year-to-date net add performance should represent a low point as we continue to
  make progress integrating TracFone while taking actions to better position us for growth including scaling our visible and total Verizon brands.
  As Hans mentioned, we expect to see sequential improvements beginning in the third quarter.
  Let's now look at our financials, starting with consolidated revenue for the quarter, which was $32.6 billion , down 3.5% year-over-year . The decline
  can be attributed to reduced wireless equipment revenue which was nearly 21% lower than the prior year as postpaid phone upgrade activity
  declined 34% versus the same period last year. Service and other revenue grew 0.8%, driven by wireless service revenue growth. Total wireless service revenue was $19.1 billion , up 3.8%
  year-over-year and more than $200 million sequentially. In the second quarter, we continued to benefit from pricing actions including a recent
  change to our Verizon Mobile Protect offering. Additionally, the larger allocation of our administrative and telco recovery fees from other revenue
  into wireless service revenue and growth in fixed wireless access drove revenue improvements. These benefits were partially offset by continued
  pressure from the amortization of handset promotions. We are on track to deliver our wireless service revenue guidance for the year. We continue to assess opportunities to take targeted pricing actions
  to better monetize our products and services as we deliver great value for our customers. For example, we recently announced an increase in our
  FWA bundled pricing for new customers which we expect will provide service revenue benefits in the second half of the year.
  Additionally, we expect less pressure from the amortization of promotional costs in the second half of the year given the softer upgrade environment
  and our disciplined approach to promotional spending. Consolidated adjusted EBITDA in the quarter was $12 billion, up 0.8% compared to the prior year. Adjusted EBITDA margin improved by 160 basis
  points over the prior year, primarily driven by lower consumer postpaid upgrade volumes and improved service revenue. These benefits were partially offset by higher marketing expenses in the quarter related to the myPlan launch as well as a $194 million increase in
  bad debt year-over-year. Bad debt was relatively flat from the prior quarter and payment trends remain consistent with recent quarters and
  prepandemic levels. Operating expenses, excluding depreciation and amortization and special items were down 5.9% year-over-year, primarily due to lower cost of
  equipment from reduced upgrade volumes. As Hans mentioned, we continue to execute on our cost savings program, including through initiatives
  within our Verizon Global Services organization. During the quarter, we took actions to rationalize our workforce as we continue to see benefits from rationalizing certain legacy wireline products.
  We are on track to deliver $200 million to $300 million of savings this year from our transformation efforts and continue to make progress towards
  achieving our goal of $2 billion to $3 billion of annual cost savings by 2025. Cash flow from operating activities for the second quarter was $9.7 billion, and for the first half of the year totaled $18 billion compared to $17.7
  billion in the prior year period. The increase continues to be related to working capital improvements associated with lower inventory levels and
  fewer upgrades which were offset in part by higher cash income taxes and interest expense. CapEx for the quarter came in at $4.1 billion, which reflects the completion of our $10 billion accelerated C-band program. Capital spending for
  the first half of the year totaled $10.1 billion, which was over $400 million less than last year. We continue to expect 2023 capital spending to be
  within our guidance of $18.25 billion to $19.25 billion. Our peak capital spend is behind us, and we are now at a business-as-usual run rate for CapEx which we expect will continue into 2024. The net
  result of cash flow from operations and capital spending is free cash flow for the quarter of $5.6 billion. Free cash flow for the first half of the year
  is $8 billion and nearly $800 million improvement from the previous year, driven by a combination of our lower CapEx spend compared to the
  prior year and operating cash flow benefits previously mentioned. While we do not normally guide on free cash flow, our strong results give us a clear line of sight to more than $17 billion of free cash flow for the
  full year. Net unsecured debt at the end of the quarter was $126.6 billion, an improvement of $3.2 billion compared to the end of the previous
  quarter and $4.1 billion lower year-over-year. We ended the quarter with $4.8 billion of cash on hand. We are well positioned with respect to our unsecured debt maturities with no remaining
  obligations for the rest of the year. Our net unsecured debt to consolidated adjusted EBITDA ratio was 2.6x as of the end of the second quarter a
  0.1x improvement both sequentially and year-over-year. We continue to monitor the current interest rate environment closely given the recent comments from the Federal Reserve on planned rate increases
  later in the year. As previously stated, we expect higher interest expense to impact our full year earnings per share by $0.25 to $0.30, and there's
  no change to that view. Our strong second quarter results support our capital allocation priorities, which remain unchanged.
  Before I hand the call back to Hans, I'd like to address the recent media reports on lead-sheathed cables in our network. Here is what we currently
  know. We still have some lead-sheathed cable in our copper network. As a result of the age of this infrastructure and the history of the industry,
  records are incomplete as to exactly how much of the cable on our network has lead sheathing. However, to give you a sense of the scale of the infrastructure we are talking about, our copper network is comprised of less than 540,000 miles of
  cable, roughly half of which is aerial and lead-sheathed cable makes up a small percentage of our copper network. This number excludes the
  network elements previously owned by MCI and XO Communications because we are still reviewing the historical records of those companies.
  We're not disturbed the likelihood of exposure to lead from lead-sheathed cables is low. In addition, because the lead-sheathed cable was used as
  a feeder and distribution cable and does not run into individual homes or apartments it is generally in locations that minimize the potential for
  public contact. We are working with a third-party expert to conduct our own testing at our sites that were identified by the media. We will not have the results of
  our testing for several weeks. When we have the results of our testing, we will work closely with our industry and others to address any concerns
  and issues. Now I think it's important to address the question we've received from a lot of investors, which is about the process for and potential cost of removal
  of the lead-sheathed cable in our network. Given where we are in this process, it is far too soon to make any projection on what the potential
  financial impact might be to the company. There are a number of unknowns in this area, including whether there is a health risk presented by undisturbed lead sheathed cable and if there
  is a risk, how that risk should be addressed. As a result, we do not believe there's a meaningful way to estimate any potential cost to the company
  or that any such estimate would even be useful. We won't be able to provide any additional color during the Q&A session, as we have more
  information we can share on the topic, we will certainly do that. I will now turn the call back to Hans for his closing thoughts before we open it up to your questions.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Thank you, Tony. As we pass the midpoint of 2023, I'm pleased by how we are effectively delivered on our priorities, and I'm confident that we will
  meet the financial goals we set for ourselves for the full year. To summarize, in mobility, our segmented and disciplined approach to the market is working, and our efforts to improve the Consumer Group's
  performance will continue throughout the second half of the year. In broadband, the combination of fixed wireless access and fiber is winning as we capitalize on the unique strength and capabilities of both
  technologies. We continue to have the best network in the market, and our leadership position will only get stronger as we continue to roll out
  C-band. While we're encouraged by the quarter's results. There's more work to be done. My leadership team and I are laser-focused on delivering
  what we committed to you at top of the year. Strong wider service revenue, EBITDA and free cash flow as well as meeting our 203 financial guidance.
  By that, I hand it over to Brady for questions.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Hans. Brad, we're ready to take the first question.
  (Operator Instructions) And our first question will come from John Hodulik of UBS.
  John Hodulik - UBS Investment Bank, Research Division - MD, Sector Head of the United States Communications Group and Telco & Pay TV Analyst
  Looks like a nice beat on the consumer side, really driven by the postpaid ARPA growth of about 6%. Could you guys sort of pull that apart a little
  bit and maybe talk about the sustainability of that and the service revenue growth you saw as we head into the second half. I mean I think you've got some lap, some price increases, but you've got some other price increases coming through and some of the promotional
  stuff rolling off. And then maybe just quickly on the lead. Obviously, you guys can't quantify it, but when you guys say low single -- low exposure
  of the 540,000 miles of copper, is that single digit? Can you guys tighten up that number for us a little bit? That would be great.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Thank you, John. Let me start with the service revenue. I think we have been extremely focused on the service revenue. As you see in this quarter,
  we are expanding the growth from the first quarter, but it's many components, I understand you want to know a little bit more about the ARPA
  expansion, but we definitely see the broadband is adding to our growth. And then, of course, our wireless business side is doing extremely well as well. I mean 8 quarters, more than 125,000. So we're actually doing a lot
  of things in different areas. But then if you go to the Consumer Group, they have been really good the last couple of quarters right now to be
  segmenting, targeting the right offering with the right pricing for the customers. And myPlan has been playing in very well to that. And as you heard Tony talking about 70% of taking the premium plan. So -- but that's just the
  start of it. We're not done. But clearly, I'm confident that the team knows how to manage this, given how much we invested in research on the
  consumer side to understand our consumers better and that's why we launched myPlan. So all in all, I have to say the guys are doing well, but I'm confident we will continue on this stride. But maybe Tony can give you some more on
  that, and then we can come back to the lead.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Yes. Thanks, Hans. So on the service revenue, we're very confident in the guide. You mentioned tough comps that we face in the second half. When
  you think about the second half of the year, let me unpack some of the drivers for you.
  As you know, we executed a number of targeted pricing actions between the price ups on the legacy unlimited plans that we did earlier in the
  quarter as well as most recently, changes to our handset insurance program and price changes on FWA bundles.
  Secondly, we had the introduction of myPlan back in May. That's helped with premium mix, and you heard that we're roughly 70% taking the
  Unlimited Plus plan. As Hans mentioned, we see an increase in contribution from fixed wireless access. We have 2.3 million subs in the base, and
  we have great momentum on FWA. And then fourth, we see continued improvements in year-over-year consumer postpaid volumes, and you saw that in the quarter. And then lastly,
  when you think about the promo amortization, the revenue impact from promotions and the promo amortization has decelerated in recent quarters.
  And that's -- it's basically a function of our disciplined approach to promotions and retention. So when you put that all together, we're very confident
  that all the initiatives here will continue to drive meaningful revenue growth in the second half.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  On the lead, as I said, we take this matter very seriously. And we're doing exactly what you expect from Verizon. We're doing this scientific and
  fact-based whereas Tony said, we're going over the different places that were pointed out by media and doing our own measurements with internal
  and external experts. And that's where we are. And we will do this very thorough. We are always doing things thorough. We do it fact-based,
  scientific and that's how we're going to do. And that's what you should expect from us.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Yes. And John, we're still reviewing the records, and we mentioned that we're still reviewing the historical records of the former MCI and XO network.
  So that work is still ongoing as well. So we still have more work to do there. And as we learn more, we'll keep you updated.
  Operator The next question comes from Brett Feldman of Goldman Sachs.
  Brett Feldman - Goldman Sachs Group, Inc., Research Division - MD
  I think I'll follow up on consumer volumes you alluded to in responding to John. It was great to see the consumer phone losses improve year-over-year,
  but I know your ambition is to do better than that. How do you think about the path getting back to net growth in consumer postpaid phones, do
  you think you're going to need to take further actions in terms of the product mix or pricing or even any additional internal adjustments? Or do
  you think you have the places -- pieces in place, and it's really just a matter of driving better execution against that framework.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  I think it's about execution on the framework we have built right now. The guys have everything. Sampath and the team together with Tony and
  me with the full support. We have a new platform in myPlan. We have segmented above the market. We work with financial discipline. The target
  we have for our team is continue to do sequential growth. And as Sampath and the team said before, we -- ultimately, we want our fair share also
  on the net adds. But ultimately, we measure ourselves on service revenue growth. And as you can see, we continue to improve that. So it's more about now executing
  on this being patient and see that both the network is the best in the market, but it's just improving and some of the numbers that Tony talked
  about, you see the impact we have when the C-band is coming out.
  And then myPlan. You see also see that is now initially what we have talked about is actually giving us really good confidence that we're in the
  right place. So all that is in place. And then we do the regionalization as well at the same time. So a lot of things is in place. It's more about execution
  and doing it with a financial discipline that you should expect from Verizon.
  Brett Feldman - Goldman Sachs Group, Inc., Research Division - MD
  And how do we think about a time line for getting to sustainably positive net adds in consumer. Is that something that would be a reasonable
  expectation once you have C-band fully deployed?
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Brett, it's Tony. So volumes are important to the business. And as we said before, we're going to be very disciplined on how we approach the market.
  Our focus is on volumes that drive profitable revenue growth. It's too soon to call third quarter positive for consumer. But as we said, we expect
  improvements year-over-year in consumer net adds and the team and Sampath and the team are very focused on that.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks Brett. Brad, we are ready for next question.
  Operator
  The next question comes from Simon Flannery of Morgan Stanley.
  Simon Flannery - Morgan Stanley, Research Division - MD
  I wanted to come back to the second phase of C-band. It was helpful to get those statistics. Could you just help us a little bit more in terms of what
  this is going to mean in terms of your footprint, both on the wireless side and on the fixed wireless side, how do we think that's going to help both
  coverage and also capacity. I know there's concerns in some quarters about fixed wireless facing congestion. It would be great to let us know what your experience has been
  with usage and how you feel good about handling that 4 million to 5 million and beyond over the next few years?
  And then maybe a quick one for Tony. Obviously, the stock has been under some pressure here, pretty high yield. Perhaps remind us about how
  you're thinking about potentially going to buybacks. You're seeing some deleveraging now strong free cash flow. Is that going to be an option
  here in the not-too-distant future.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Thank you, Simon. When it comes to the C-band, I said we're ahead of the plan. As soon as we get hold of the next tranche of spectrum, the team
  is ready to continue to deploy that. That's going to give us both more capacity, but of course, more coverage as well. So it gave us both. And as
  you have seen in the numbers we talk about here, as soon as we deploy C-band, we get better uptake from our wireless customers. And of course,
  we'll open up fixed wireless access. So that should be positive over time for us.
  And when it comes to this lingering question about capacity, we don't have any capacity problems. I mean the guys are doing an enormously good
  job as always when it comes to Verizon and capacity, network planning. Joe and the team are on it all the time and seeing that we're doing the
  right for our customers. And remember, we are building a multipurpose network. That means that we have one radio that serve multiple opportunities, wireless, fixed
  wireless access, in some cases, private networks, so all that is in one, and that's the efficiency and the scale we're bringing right now, which we
  expected when we started with 5G and the C-band to see that we get the leverage model over time. But of course, it's going to roll out on the next
  year here. So I'm confident that this will create more opportunities for us now when we get hold of the next tranche of the C-band spectrum.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Okay, Simon. And then on your question on the cash generation, we're very pleased with the cash generation of the business. Cash on hand at the
  end of the quarter was $4.8 billion, which was very strong and reflective of our strong free cash flow results that it is higher -- running higher than
  normal. As a reminder, we do have about $4.5 billion of the C-band clearing obligations remaining and due soon, and that's obviously a priority
  for us. The cash generation, as I said, is strong, gives us optionality and supports a much improved dividend payout ratio. Our capital allocation priorities
  are unchanged. We said, first, we would invest in the business. The second priority is our commitment to the dividend. Our third priority is to
  delever, and you'll see us be focused on that. And then once we get to the leverage metric of 2.25, we will consider buybacks at that time.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Simon, Brad, we are ready for next question.
  Operator
  The next question comes from Phil Cusick of JPMorgan.
  Philip Cusick - JPMorgan Chase & Co, Research Division - MD and Senior Analyst
  With the price increases and the impact of the new pricing structure, it looks like you're trending above the midpoint of service revenue growth. I
  mean, it could be closer to the high end. Any reason to think it decelerates from here?
  And then second, Hans, you spoke on private wireless. Can you dig into the market opportunity there? And how long it takes for that to be a $1
  billion business?
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  I'll start with the second question, and Tony can come back on the first. On the private wireless, what we have found out during the work we've
  been doing is that private 5G networks is something really, really valuable for enterprises and SMBs. And the main reason is that the capacity on
  it, the speed and the security, it basically starts as a Wi-Fi replacement on licensed spectrum. And then you start adding on to it.
  Usually it start with one factory. And if you see that are working there, they do it in all factories. We have a growing list of new customers coming
  in, in the first phase. I would say this is a new business for us that again, is building on the same investment, the same Verizon Intelligent Edge
  Network. I don't expect that it's $1 billion business this year. But it definitely over time, this is a very important lever for Kyle and his team for growth
  in the service revenue and actually doing even better in the -- with enterprises.
  So it's going to take some time, but I'm really pleased with what I've seen in the last couple of quarters, how this is turning out. And I would say we
  have now an ecosystem with devices, with radio base stations, with integrators and all of that, which we haven't had before. So I'm more optimistic
  than a long time that private networks will be something. And as you know, I mean, we were way ahead of anybody else on this field. And that's
  why I feel really confident we will take more than our fair share.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Phil. And then on the service revenue, as we mentioned upfront, we have some tough comps as we lap the price up from last year. We do expect
  sequential improvements in the third quarter. One thing to note, just on the prepaid revenue, we did see a headwind in the quarter of about $125
  million. I would expect that to be at a similar level in the third quarter before it eases up in the fourth quarter, that's probably one additional data
  point for you.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Phil, Brad, we are ready for next question.
  Operator
  The next question comes from Frank Louthan of Raymond James.
  Frank Louthan - Raymond James & Associates, Inc., Research Division - MD of Equity Research
  Can you walk us through the correlation between the broadband adds and the business wireless adds, including both the Fios and fixed wireless?
  And then you mentioned expecting some software upgrades. Are you anticipating having to subsidize any more for handsets to get adds as the
  year goes on?
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  On the broadband side, I think I got the question like that the correlation between the fixed wireless access and the Fios. I mean, let me say that
  on the fixed wireless access right now, we are growing that base, of course, mainly outside the ILEC because that's just how it is because the Fios
  is so strong. So we're doing great on the Fios business. And as you have seen, even though it's a softer housing movement season than before,
  we're doing great. I mean, over 50,000 again on Fios. So Fios is doing really well.
  And then, of course, we have a portion of converged customers that is now growing. It's not growing that to come to European levels or something,
  but it's growing. The good thing for us is we have owner's economics on everything, fixed wireless access, wireless, Fios, we have one network, we
  are our own fiber. And that, of course, gives us opportunity to meet customer demands if they want convergence or not and that nobody else has
  in the industry. So really pleased with the development of broadband for us. We outlined this as one of the most important 5G innovations we've
  done. We have substantial new customers there. So this is a great opportunity and as you saw right now we continue doing as we have done. I mean we
  have now 2.3 [million] (corrected by company after the call) customers on fixed wireless access. We can now start with different tiers, different
  pricings, so we can meet customer demands that have different requirements. And that's just good for us, but it's also really good for our customers
  because they can choose between different models, depending on what needs they have.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Yes. And the only other thing I would add is that we have a great rhythm at 400,000 broadband net adds in the quarter. And again, another -- the
  third consecutive quarter of over 400,000 broadband net adds, and we continue to see good momentum with customers taking -- wireless customers
  taking FWA and we see great progress there as well.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  And then you had a question on upgrades. And as you have seen, and promos. That is clearly down in the second quarter and the first quarter as
  well. There are many reasons where some are, of course, that we are much more financially disciplined. That's very important. But it also haven't
  been in any major new devices coming out. It will probably come on in the second half. It usually comes, so we're going to see that. But I don't foresee that we will come back to the levels
  we've seen before from a point of view of Verizon. We think that we're going to be disciplined. We're going to offer devices and promos and
  upgrades where there is the best for the segment and for the customer, but will not come back to the levels that we saw before.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Frank. Brad, we are ready for next question.
  Operator
  The next question comes from David Barden of Bank of America.
  David Barden - BofA Securities, Research Division - MD
  So I wanted to come back to the relationship between Verizon and the cable industry. Before the lead, this was the big issue. And if there were 2
  pillars to the idea behind the relationship between Verizon and the cable industry, one was that somehow Verizon had negotiated a deal with the
  cable industry that they would guarantee to make money no matter how much data cable consumers took.
  And the second was that, that deal would never end. It was going to be forever. And so I feel like the messaging on that has started to change from
  Verizon a little bit and that maybe that the idea that cable industry is guaranteed to make money in the relationship between Verizon and cable
  regardless of data consumption, that that's not true. And then this deal isn't permanent, it could change at some future time, even though the DOJ, obviously, you need to have a some deal, but it
  doesn't have to be this deal. And I was wondering if you could kind of just address that for us right now.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  David, thank you for the question. This is a complex area. And remember, many of these things we cannot talk about. We have NDA's when it comes
  to our contracts. The only thing that I'm securing is that Verizon is making money on this, that's I can tell you, and we think this is an important
  business. These are important customers to us. And again, I go back to what I talked about before. We build the network once. The more connections and more usage and the more revenue we
  have on it, the better return on capital it is. And as long as we see that's happening, we will continue the work we're doing, however, I cannot go
  into specifics on the contracts because, first of all, I'm not allowed to do it. So -- but clearly, you should feel confident that Verizon is doing that
  with the best interest of our stakeholders and our shareholders. So -- and we want to get the best return on our invested capital in the network.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Dave. Brad, we are ready for next question.
  Operator
  The next question comes from Michael Rollins of Citi.
  Michael Rollins - Citigroup Inc., Research Division - MD & U.S. Telecoms Analyst
  Two questions, if I could. First, just following up on the comments around tiering of fixed wireless and potentially on speed, is there also an
  opportunity to begin tiering mobile 5G wireless in terms of megabits per second rather than a historical way of tiering on gigabytes per month of
  consumption? And then just secondly, you mentioned that the cash CapEx is tracking to guidance. But just curious, as you're deploying the mid-band spectrum,
  the depth of it, and seeing what the propagation is, are there opportunities to get further efficiencies in capital and potentially go below the business as usual indication of CapEx for 2024.
  REFINITIV STREETEVENTS | www.refinitiv.com | Contact Us
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Mike, thank you for the question. On the question about different models over time, how we can charge for 5G., I think we find a good model within
  myPlan right now with different type of network options, then you can take your perks. All of it is accretive for us. You should see the first sort of
  launch here as the first time we come out with the platform.
  We see multiple opportunities, how you can sort of diverse that one in different ways to meet different customer demands. So you will probably
  see more of that going forward, how we'll do that. So clearly, very important to us that we continue to meet our customers with new plans and
  things like that. But now we have a great base that is myPlan.
  On the CapEx side, I think we have gone over sort of a fairly long hump here coming from Verizon Intelligent Edge Network, investing in fiber,
  investing to -- in all the parts of millimeter wave, then coming into the hump of C-band, now we come into the BAU. As far as we can see right now, is BAU is around $17 billion to $17.5 billion. And that's going to see that we can deploy the C-band, getting all the benefits we talked about is coming down. Fiber is more success-based. So there's a lot of things happening in there, but we're really confident that we can be on those levels, and our team is really doing a great job.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Mike. Brad, we are ready for next question.
  Operator
  The next question comes from Craig Moffett of Moffett Nathanson.
  Craig Moffett - MoffettNathanson LLC - Co-Founder, Founding Partner & Senior Research Analyst
  Two questions, if I could. First, if I could return to the lead topic for one moment. Can you just talk about the extent to which you used overlashing
  of fiber to what might potentially be lead cables particularly in your aerial plant in the Northeast.
  And then second, I just wonder if you could just help us think about the trajectory going forward of fixed wireless, which has seemingly sort of
  steadied out to a relatively stable number. Is that what we should expect because that would take us a bit higher than your guidance by the end
  of 2025. So I'm just wondering how we think about the pacing of fixed wireless.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Thank you, Craig. I'll start with the fixed wireless access question because I think that is an important one. And the lead, we will hear from Tony on
  that one. On the fixed wireless access, you're right. I mean we are now running on a fairly high level, adding broadband subscriber quarter. Remember,-- we have defined -- we are roughly in, I would say, a little bit over 70% of the PAs of C-band so far out of 402, so that, of course, is how many OFS
  or open for sales, we can do right now. So that is a little bit -- the next step is going to be the next tranche coming in.
  And I said, we're well ahead for the 4 million to 5 million, the team is doing a great job. We also saw that we now are doing some great work on
  how we can address MDUs in a very efficient way. We're in the beginning of that. So all in all, I think that fixed wireless access and how we're
  managing our network is going great. And of course, as an ambitious leader, as I am, I expect that we can do better, of course. But right now, that's
  the forecast we have, 4 million to 5 million. And we are really doing well. And the customer satisfaction on fixed wireless access is so good. It's so
  simple. You install it yourself. You get broadband immediately. So we're just meeting a consumer demand that no one else is doing basically. So I'm really pleased with the product. We talked about this being
  one of the most important 5G applications, and now you can see what it means to us and how important it's going to be over time.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  And then, Craig, on the lead, as we said earlier, it's a small part of our network. It's about 50% aerial. We said we're still reviewing the historical
  records, both former MCI network and the former XO copper network. So we still have work to do there. We're going to take a very methodical
  approach, very fact-based, very scientific-based approach. And as we know everyone wants more information. And as we learn more, we'll keep
  you updated.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Craig. Brad, we are ready for next question.
  Operator
  The next question comes from Bryan Kraft of Deutsche Bank.
  Bryan Kraft - Deutsche Bank AG, Research Division - Senior Analyst
  I want to ask 2, if I could. I guess, First, just on the lead issue, I was wondering if you thought this might lead to an acceleration in copper network
  retirements and therefore, an accelerated reduction in fixed costs for legacy networks. It seems like an opportunity in cases where communities
  might want to not have lead cable in their communities, even if it isn't actually shedding any lead.
  And then secondly, I just had a follow-up to Simon's question earlier. Can you talk about how the remaining C-band deployments will affect the
  fixed wireless opportunity in rural areas? Specifically, how much of an expansion in the rural footprint will that represent versus the available
  footprint today for fixed wireless, and would that include a lot of areas that aren't served by anything today, except for copper infrastructure, so
  kind of the true rural areas?
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  So on the first one, we have always a plan for network transformation that we continue going. That has not changed. When it comes to this
  lead-sheathed cables discussion, as said, I mean, we're going to go through this scientific, we're going to do test. We're going to do it fact-based
  and then we'll come back. But we have a normal network transformation that we constantly do because Kyle and team are doing that in order to
  keep up with the pressure of the secular decline in wireline, so he will continue to do that, and we do that all the time.
  On the second question on fixed wireless access, yes, of course, when we -- the first 70, i would say ish, I would say is C-band mark PEAs that is
  called, they are mainly in urban areas. And that's where we have had that good traction on fixed wireless access. In the next step, it's going to be
  much more suburban and rural. And of course, that's great opportunity because usually, they are even less different options for customers in those
  areas. So of course, that's going to create opportunities for us. That doesn't mean that we are changing our guidance. We still say 4 million to 5 million
  by 2025. Of course, the team is always driving hard here, and I am driving hard. We always want to achieve. We want to show our stakeholders that
  we are a great company and we execute well, which I think we're doing. So definitely, we see opportunities coming with the next tranche of C-band.
  Operator
  The next question comes from Tim Horan of Oppenheimer.
  Timothy Horan - Oppenheimer & Co. Inc., Research Division - MD & Senior Analyst
  On the wholesale -- on the cable side, maybe just discuss the wholesale wireless ARPUs broadly speaking. Do you think you can grow wholesale
  wireless ARPUs. And then the $10 increase in fixed wireless pricing, do you think that would slow kind of sub growth quarterly, obviously good
  strength there? And then lastly, on the lead side, can you just qualitatively talk how often are your workers exposed to lead? I'm sure you have to
  log that. And what do you do to kind of protect workers? And have you ever seen any claims from workers on lead poisoning.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  There were many questions in all there. So let me start by the change of discounts that we did on fixed wireless access again, we have a premium
  product. We have different type of optionalities for our customers in order to pick and choose with the best areas or what the best service is. So
  we think that this is just natural when you have passed over 2 million subscribers on fixed wireless access.
  And I think you just think about when we started with unlimited, you start with one plan and then you start to work with different segmentation
  because ultimately, we are in a very, very big consumer business, where so many differentiated customers that needs different type of services. So
  just think about it as a very natural step for us in order to serve our customers in a good way. Then I hand it over to Tony for the next question.
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  Yes. On the cable partnership, I mean, as Hans mentioned, we don't go into the details. I mean, we continue to see volume growth in the relationship,
  and we're very satisfied with the relationship and we continue to monetize the network, as Hans said earlier.
  Timothy Horan - Oppenheimer & Co. Inc., Research Division - MD & Senior Analyst
  And then on the worker lead exposure?
  Anthony Skiadas - Verizon Communications Inc. - Executive VP & CFO
  We continue to work across the company and continue to take a methodical approach. We're not going to get into any specifics around employees
  or anything. But as we said, we'll keep you posted as we learn more.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Thanks, Tim. Brad, we are ready for next question.
  Operator
  Next question comes from Peter Supino of Wolfe Research.
  Peter Supino - Wolfe Research, LLC - MD & Senior Analyst
  I wanted to ask 2, one on upgrade rates and the other on FWA. On upgrade rates, I wondered if you could discuss why they've fallen so much. And
  whether it's sustainable what the risks are to a recent trend and on FWA. I just wonder if you could discuss the service price increase that we learned
  about this week.
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  On the upgrade rates, as I said before, I mean, first of all, we at Verizon has been very disciplined in how to offer sort of products and services with
  the right price at the right time. So definitely that has been that we are actually doing less promos and less upgrades, that has not hampered our
  way of growing our business or taking customers, and we will continue to work with that.
  Then, of course, hasn't been any major product coming out in the market. We expect there's going to be a product coming out in the second half.
  We're excited over that. And of course, that's going to drive upgrades and promos, of course. But again, we will continue to be very financially
  disciplined. But of course, we're excited for these type of things as it attracts store traffic. And when store traffic comes we are really good and
  having a good conversion rate, adding things to it to our customers, which is really, really important.
  And then second, on the fixed wireless access, taking away the discount, and again, we come to a level of 2.3 million fixed wireless customer. There
  are so many different type of customers and consumers we have. So of course, having different tiers and pricing becomes very normal in order to
  meet customer demands. So it's just how we do, and that will continue to do and see how the market is developing.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Brad, we have time for one more question.
  Operator
  The final question for today will come from Walter Piecyk of LightShed.
  Walter Piecyk - LightShed Partners, LLC - Partner & TMT Analyst
  I just want to actually do a follow-up to that upgrade question. The last 2 years, Hans, the upgrade rate has actually declined in the third quarter.
  So I just want to kind of piece meal together, like you said you're not going to do handset promotions earlier in the call.
  Obviously, everyone knows Apple comes out with a new product, but in the last answer, it sounded like you thought people would upgrade more,
  but what, what seasonal trends should we see here? I assume you're still expecting it to be down year-on-year, but what about sequentially because
  it's been typically down sequentially in the third quarter for the last 2 quarters, maybe COVID had some impact on that, I don't know.
  And then my second question on CapEx. There's some debate, I think a lot of the tower companies specifically are trying to drive this narrative of
  like, oh, your C-band is going to get deployed, but they're doing fixed wireless and all these things, you're going to have to come back and do
  densification very quickly. So any lull in CapEx will be short-lived. I'm just curious, I mean, obviously, we saw the CapEx drop very quickly here in this quarter. How long do
  you think this kind of CapEx holiday will exist before you need to come back and use densification in the absence of additional spectrum sourced
  by the FCC?
  Hans Vestberg - Verizon Communications Inc. - Chairman & CEO
  Yes. Thank you. On the upgrade, I cannot -- I don't know anything about any launch of the product, how exciting it's going to be. But ultimately,
  that usually drives more upgrades. So let's see what's going to happen this time and when it comes out. But we're always excited to see Apple
  coming out with a new phone. Hopefully, they are coming in this half. I cannot reveal what they are doing. But clearly, we're excited for that.
  On the CapEx, yes, you should talk to us. We know more about this than other companies. I would say we have a really good, sustainable level of
  this densification, it's part of our strategy already. So -- and many of the things that we're already are deploying on C-band, we deploy sort of for
  the full spectrum already from the beginning, then we turn on when we get those tranches.
  So there's a lot of things that my team has done over years in order to be as efficient as possible on CapEx. That's why I feel really good on our sort
  of BAU around $17 billion to $17.5 billion. I feel really good about that because we go through this extremely detailed. So we feel confident.
  Brady Connor - Verizon Communications Inc. - SVP of IR
  Yes. Thanks, Walt. Brad, that was all the time we had for today.
  Operator
  Ladies and gentlemen, this does conclude today's conference call. Thank you for your participation and for using Verizon Conference Services. You
  may now disconnect.`);
  console.log(question)
  console.log(answers)
  if (answers.length !== 0) {renderMessageEle(answers[0].text, "chatbot-message");}
  else {renderMessageEle("Could you repeat that differently?", "chatbot-message")}
};

// send clicked -> render user message
send.addEventListener("click", () => renderUserMessage());
// enter keyboard clicked -> render user message
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  if (userInput == "") {return -1}
  renderMessageEle(userInput, "user-message");
  /*Clears msg after send */
  txtInput.value = "";
  /*Wait for response makes msg seem more natural */
  renderChatbotResponse(userInput);
  setScrollPosition();
};

/*
Creates msg text based on input
For type user or type chatbot
*/
const renderMessageEle = (txt, type) => {
  let className = type
  if (type !== "user-message"){ className = "chatbot-message"}
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

/*
Automatically resets chat body position to lowest
if scrollbar is activated
*/
const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const renderChatbotResponse = (userInput) => {
  modelPromise = qna.load();
  process(userInput);
};