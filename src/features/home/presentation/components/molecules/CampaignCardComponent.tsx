import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import CardComponent from '@/shared/presentation/components/atomics/CardComponent';
import { numberToCurrency } from '@/shared/presentation/utils/number.util';

type Props = {
  campaign: Campaign;
};
export default function CampaignCardComponent(props: Props) {
  const campaign = props.campaign;
  return (
    <CardComponent>
      <div className="flex flex-row justify-between items-start">
        <div className="w-[80%]">
          <h5 className="text-sm font-bold">{campaign.title}</h5>
          <div className="text-xs truncate">{campaign.description}</div>
        </div>
        <div className="flex items-start">
          <button className="text-primary">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs mt-3">
        <div>
          category:{' '}
          <strong className="text-primary">{campaign.category}</strong>
        </div>
        <div>{numberToCurrency(campaign.detail?.targetAmount ?? 0)}</div>
      </div>
    </CardComponent>
  );
}
