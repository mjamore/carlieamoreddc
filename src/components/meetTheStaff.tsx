import React, { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Card from './card';

const MeetTheStaff = (): ReactElement => {
  const maxWidthClass = 'max-w-sm';
  const imageClasses = 'my-3 rounded-full shadow-circular-img';
  const imagePlaceholderType = 'blurred';
  const loadingType = 'eager';

  return (
    <div>
      <h3 className='text-center text-3xl'>Meet The Team</h3>
      <div className='flex flex-col justify-center lg:flex-row'>
        <Card
          heading='Lori Moore'
          subHeading='Office Manager'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere fermentum ligula, non convallis velit commodo in. Praesent sed turpis molestie, porttitor lorem eu, rhoncus nunc. Aliquam eget mollis felis, ut cursus massa. Cras non nulla vel tellus accumsan dignissim. Etiam rhoncus ligula eu massa posuere, eu luctus arcu posuere. Nulla semper, metus sit amet iaculis eleifend, eros dolor finibus nibh, sit amet congue leo neque ac neque. Sed eget arcu ac nulla rutrum dictum.'
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/broadmoor/lori.webp'
            alt='Image of Office Manager Lori Moore'
            placeholder={imagePlaceholderType}
            loading={loadingType}
            width={128}
          />
        </Card>
        <Card
          heading='Terri S. Cahoj'
          subHeading='Lead Dental Assistant'
          description='Aenean venenatis ultrices risus, nec ullamcorper purus lacinia venenatis. Pellentesque placerat pulvinar turpis quis pellentesque. Aliquam dapibus at libero feugiat euismod. Curabitur nulla nisi, lacinia eget elit at, ullamcorper fermentum turpis. Mauris eu mi dapibus, mollis metus vehicula, tempus ante. Donec vitae nulla nec erat suscipit porttitor id at lectus. Suspendisse potenti. Nulla ac ultricies ipsum, eget tincidunt orci.'
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/broadmoor/terri.webp'
            alt='Image of Lead Dental Assistant Terri S. Cahoj'
            placeholder={imagePlaceholderType}
            loading={loadingType}
            width={128}
          />
        </Card>
        <Card
          heading='Heather U. Bokern'
          subHeading='Registered Dental Hygienist'
          description='Suspendisse velit nisi, euismod eu convallis in, facilisis quis quam. Nam eu neque ultricies, sagittis arcu nec, vehicula urna. Maecenas ut laoreet risus, quis aliquet tortor. Fusce sit amet consectetur ipsum. Fusce porta arcu sit amet lobortis pretium. Vivamus sed dictum risus, eget condimentum est. Aenean interdum ut nisi sit amet lacinia. Vestibulum pellentesque, neque id ultricies mollis, augue tellus viverra ipsum, quis mollis elit nisl non mi. Nunc suscipit magna eget est bibendum, in sodales purus ultricies.'
          maxWidth={maxWidthClass}
        >
          <StaticImage
            className={imageClasses}
            src='../images/broadmoor/heather.webp'
            alt='Image of Registered Dental Hygienist Heather U. Bokern'
            placeholder={imagePlaceholderType}
            loading={loadingType}
            width={128}
          />
        </Card>
      </div>
    </div>
  );
};

export default MeetTheStaff;
