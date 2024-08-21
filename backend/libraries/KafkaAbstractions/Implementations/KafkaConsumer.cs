using Confluent.Kafka;
using KafkaAbstractions.Interfaces;

namespace KafkaAbstractions.Implementations;

public class KafkaConsumer<TKey, TValue> : IKafkaConsumer<TKey, TValue>
{
    private readonly string _topic;
    private readonly IConsumer<TKey, TValue> _consumer;
    
    public KafkaConsumer(KafkaOptions options)
    {
        _topic = options.TopicTypeMap[typeof(TValue)];
        _consumer = new ConsumerBuilder<TKey, TValue>(options.ConsumerConfig).Build();
    }
    
    public async Task StartConsumingAsync(Func<ConsumeResult<TKey, TValue>, Task> handler, CancellationToken cancellationToken)
    {
        _consumer.Subscribe(_topic);

        while (cancellationToken.IsCancellationRequested == false)
        {
            var result = _consumer.Consume(cancellationToken);
            await handler(result);
        }
    }
}