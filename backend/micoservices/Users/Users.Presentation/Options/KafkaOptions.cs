namespace Users.Presentation.Options;

public class KafkaOptions
{
    public const string Path = "Kafka";

    public string BootstrapServers { get; set; } = default!;
    public string GroupId { get; set; } = default!;
    public KafkaOptionTopics Topics { get; set; } = default!;
}

public class KafkaOptionTopics
{
    public string UserAuthenticated { get; set; } = default!;
}