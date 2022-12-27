import Title from '@/shared/presentation/components/atoms/Title';
import PaymentMethodCard from '../molecules/PaymentMethodCard';

export default function PaymentMethod() {
  return (
    <div className="flex flex-col space-y-3">
      <Title>Payment Method</Title>
      <PaymentMethodCard />
    </div>
  );
}
