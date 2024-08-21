using Confluent.Kafka;
using KafkaAbstractions.Implementations;
using KafkaAbstractions.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace KafkaAbstractions;

public class KafkaOptions
{
    public ProducerConfig ProducerConfig { get; private set; } = default!;
    public ConsumerConfig ConsumerConfig { get; private set; } = default!;
    public Dictionary<Type, string> TopicTypeMap { get; private set; } = new();

    public KafkaOptions SetProducerConfig(ProducerConfig config)
    {
        ProducerConfig = config;
        return this;
    }
    
    public KafkaOptions SetConsumerConfig(ConsumerConfig config)
    {
        ConsumerConfig = config;
        return this;
    }

    public KafkaOptions AddRoute<T>(string topic)
    {
        TopicTypeMap.Add(typeof(T), topic);
        return this;
    }
}

public static class ServiceExtensions
{
    public static IServiceCollection AddKafkaAbstractions(this IServiceCollection services, Action<KafkaOptions> configure)
    {
        var options = new KafkaOptions();
        configure(options);
        services.AddSingleton(options);
        services.AddTransient(typeof(IKafkaProducer<,>), typeof(KafkaProducer<,>));
        services.AddTransient(typeof(IKafkaConsumer<,>), typeof(KafkaConsumer<,>));
        return services;
    }
}