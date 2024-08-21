using Confluent.Kafka;
using KafkaAbstractions.Interfaces;

namespace KafkaAbstractions.Implementations;

public class KafkaProducer<TKey, TValue> : IKafkaProducer<TKey, TValue>
{
    private readonly string _topic;
    private readonly IProducer<TKey, TValue> _producer;
    
    public KafkaProducer(KafkaOptions options)
    {
        _topic = options.TopicTypeMap[typeof(TValue)];
        _producer = new ProducerBuilder<TKey, TValue>(options.ProducerConfig).Build();
    }
    
    public async Task<DeliveryResult<TKey, TValue>> SendAsync(Message<TKey, TValue> message)
    {
        return await _producer.ProduceAsync(_topic, message);
    }
    
    public async Task<IEnumerable<DeliveryResult<TKey, TValue>>> SendRangeAsync(IEnumerable<Message<TKey, TValue>> messages)
    {
        return await Task.WhenAll(messages.Select(SendAsync));
    }
    
    public void Dispose()
    {
        _producer.Flush(TimeSpan.FromSeconds(10));
        _producer.Dispose();
    }
}