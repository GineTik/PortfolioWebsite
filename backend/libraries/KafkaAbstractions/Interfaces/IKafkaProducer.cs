using Confluent.Kafka;

namespace KafkaAbstractions.Interfaces;

public interface IKafkaProducer<TKey, TValue>
{
    Task<DeliveryResult<TKey, TValue>> SendAsync(Message<TKey, TValue> message);
    Task<IEnumerable<DeliveryResult<TKey, TValue>>> SendRangeAsync(IEnumerable<Message<TKey, TValue>> messages);
}