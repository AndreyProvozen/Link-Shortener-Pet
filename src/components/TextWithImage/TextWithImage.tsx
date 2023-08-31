import Image from 'next/image';
import { FC, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import Star from '@/icons/Star';
import ClassNames from '@/utils/classNames';

import { TEXT_WITH_IMAGE_TEST_IDS } from './testIds';

interface Props {
  linkData: { src: string; alt: string };
  text: string;
  title: string;
  featuresListData: string[];
  imageFirst?: boolean;
  containerClasses?: string;
}

const TextWithImage: FC<Props> = ({ linkData, text, imageFirst, title, featuresListData, containerClasses = '' }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    initialInView: true,
  });

  const imageTransition = useMemo(() => (imageFirst ? 'animate__fadeInRight' : 'animate__fadeInLeft'), [imageFirst]);
  const textTransition = useMemo(() => (imageFirst ? 'animate__fadeInLeft' : 'animate__fadeInRight'), [imageFirst]);

  return (
    <div
      ref={ref}
      data-testid={TEXT_WITH_IMAGE_TEST_IDS.ROOT}
      className={ClassNames(
        { 'flex-row-reverse': imageFirst },
        { invisible: !inView },
        'flex justify-between max-w-screen-desktop px-5 mx-auto max-desktop-small:block overflow-hidden',
        containerClasses
      )}
    >
      <Image
        src={linkData.src}
        alt={linkData.alt}
        height={400}
        width={500}
        className={ClassNames('px-5 max-desktop-small:mx-auto animate__animated', { [imageTransition]: inView })}
      />
      <div
        className={ClassNames('pt-5 max-w-[700px] max-desktop-small:mx-auto animate__animated', {
          [textTransition]: inView,
        })}
      >
        <h2 className="text-2xl font-bold mx-auto text-center mb-2">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        {Boolean(featuresListData) &&
          featuresListData?.map(feature => (
            <div className="flex mt-5" key={feature}>
              <Star className="shrink-0 mr-2 fill-lightOrange" /> {feature}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TextWithImage;
