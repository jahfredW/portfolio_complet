<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\OpenApi\Model;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ContactRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
#[ApiResource(
    operations: [
        new Post(
            validationContext: ['groups' => ['post:contact:validation']],
            denormalizationContext: ["groups" => ["post:contact:item"]],
            normalizationContext: ['groups' => ['read:contact']],
            openapi: new Model\Operation(
                summary: "Publication d'un message de contact",
                responses: [
                    '201' => [
                        'description' => 'OK',
                        'content' => [
                            'application/json' => [
                                'schema' => [
                                    'type' => 'string',
                                    'exemple' => 'Message envoyé'
                                ]
                            ]
                        ]
                    ]
                ]
            )
                                ),
        new Get(
            security: "is_granted('ROLE_ADMIN')", securityMessage: 'Only admins get Contacts.',
            normalizationContext: ['groups' => ['read:contact']],
        ),
        new GetCollection(
            // security: "is_granted('ROLE_ADMIN')", securityMessage: 'Only admins get Contacts.',
            normalizationContext: ['groups' => ['read:contact']],
            // openapiContext: [
            //     "security" => [['JWT' => []]]
            // ]
        )

    ]
)]
#[ORM\HasLifecycleCallbacks]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['post:contact:item', 'read:contact']), Assert\Email(['message' => 'The mail "{{ value }}" is not a valid mail.'], groups: ['post:contact:validation'])]
    #[ApiProperty(
        description: 'mail de contact',
        openapiContext:[
            'exemple' => 'hello@hotmail.com'
        ]

    )]
    private ?string $mail = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['post:contact:item', 'read:contact']), Assert\Regex([ "pattern" => '/^[\p{L}\p{N}\s\',.]*$/u'], groups: ['post:contact:validation'])]
    private ?string $message = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\Column]
    #[Groups(['post:contact:item', 'read:contact'])]
    private ?bool $agree = null;

    #[ORM\PrePersist]
    public function setCreatedValue() : void 
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): static
    {
        $this->mail = $mail;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function isAgree(): ?bool
    {
        return $this->agree;
    }

    public function setAgree(bool $agree): static
    {
        $this->agree = $agree;

        return $this;
    }
}
