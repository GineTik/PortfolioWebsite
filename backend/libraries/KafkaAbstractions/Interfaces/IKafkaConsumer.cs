using Confluent.Kafka;

namespace KafkaAbstractions.Interfaces;

public interface IKafkaConsumer<TKey, TValue>
{
    Task StartConsumingAsync(Func<ConsumeResult<TKey, TValue>, Task> handler, CancellationToken cancellationToken);
}