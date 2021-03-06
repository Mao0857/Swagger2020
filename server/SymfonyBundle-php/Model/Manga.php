<?php
/**
 * Manga
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Server\Model
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * SwaggerでマンガAPIを遊ぶ
 *
 * マンガのためのAPI
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Server\Model;

use Symfony\Component\Validator\Constraints as Assert;
use JMS\Serializer\Annotation\Type;
use JMS\Serializer\Annotation\SerializedName;

/**
 * Class representing the Manga model.
 *
 * @package Swagger\Server\Model
 * @author  Swagger Codegen team
 */
class Manga 
{
        /**
     * @var int
     * @SerializedName("id")
     * @Assert\NotNull()
     * @Assert\Type("int")
     * @Type("int")
     */
    protected $id;

    /**
     * @var string|null
     * @SerializedName("name")
     * @Assert\Type("string")
     * @Type("string")
     */
    protected $name;

    /**
     * @var \DateTime|null
     * @SerializedName("releaseDate")
     * @Assert\DateTime()
     * @Type("DateTime")
     */
    protected $releaseDate;

    /**
     * @var Swagger\Server\Model\Chapter[]|null
     * @SerializedName("chapters")
     * @Assert\All({
     *   @Assert\Type("Swagger\Server\Model\Chapter")
     * })
     * @Type("array<Swagger\Server\Model\Chapter>")
     */
    protected $chapters;

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->id = isset($data['id']) ? $data['id'] : null;
        $this->name = isset($data['name']) ? $data['name'] : null;
        $this->releaseDate = isset($data['releaseDate']) ? $data['releaseDate'] : null;
        $this->chapters = isset($data['chapters']) ? $data['chapters'] : null;
    }

    /**
     * Gets id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Sets id.
     *
     * @param int $id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Gets name.
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets name.
     *
     * @param string|null $name
     *
     * @return $this
     */
    public function setName($name = null)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Gets releaseDate.
     *
     * @return \DateTime|null
     */
    public function getReleaseDate()
    {
        return $this->releaseDate;
    }

    /**
     * Sets releaseDate.
     *
     * @param \DateTime|null $releaseDate
     *
     * @return $this
     */
    public function setReleaseDate(\DateTime $releaseDate = null)
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    /**
     * Gets chapters.
     *
     * @return Swagger\Server\Model\Chapter[]|null
     */
    public function getChapters()
    {
        return $this->chapters;
    }

    /**
     * Sets chapters.
     *
     * @param Swagger\Server\Model\Chapter[]|null $chapters
     *
     * @return $this
     */
    public function setChapters(Chapter $chapters = null)
    {
        $this->chapters = $chapters;

        return $this;
    }
}


